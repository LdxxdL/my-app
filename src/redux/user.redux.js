import axios from 'axios'
import { getRedirectPath } from '../util'

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MESSAGE = 'ERROR_MESSAGE'
const LOAD_DATA = 'LOAD_DATA'

const initState = {
  redirectTo: '',
  msg: '',
  user: '',
  pwd: '',
  type: ''
}

//reducer
export function user(state=initState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {...state, msg:'', redirectTo:getRedirectPath(action.payload),isAuth:true, ...action.payload}
    case LOAD_DATA:
      return {...state, ...action.payload}
    case ERROR_MESSAGE:
      return {...state, isAuth:false, msg:action.msg}
    default:
      return state
  }
}

function authSuccess(data) {
  const {pwd, ...obj} = data
  console.log(pwd)
  return {type:AUTH_SUCCESS, payload:obj}
}

function errorMsg(msg) {
  return { type:ERROR_MESSAGE, msg: msg}
}

export function loadData(userinfo) {
  return {type:LOAD_DATA, payload:userinfo}
}

export function update(data) {
  return dispatch=>{
    axios.post('./user/update', data)
    .then(res=>{
      if (res.status===200&&res.data.code===0) {
        dispatch(authSuccess(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

export function login({user,pwd}) {
  if (!user||!pwd) {
    return errorMsg('请确认输入用户名和密码')
  }
  return dispatch=>{
    axios.post('/user/login', {user,pwd})
    .then(res=>{
      if (res.status===200&&res.data.code===0) {
        dispatch(authSuccess(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

export function register({user,pwd,repeatpwd,type}) {
  if(!user||!pwd||!type||!repeatpwd) {
    return errorMsg('请确认输入用户名和密码')
  }
  if (pwd!==repeatpwd) {
    return errorMsg('两次输入的密码不相同')
  }
  return dispatch=>{
    axios.post('/user/register', {user,pwd,type})
    .then(res=>{
      if (res.status===200&&res.data.code===0) {
        dispatch(authSuccess({user,pwd,type}))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
  
}