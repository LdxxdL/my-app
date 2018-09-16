import { combineReducers } from 'redux'
import { user } from './redux/user.redux'

//用于合并所有的reducers 并返回
export default combineReducers({user})


