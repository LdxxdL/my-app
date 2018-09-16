import React from 'react'
import { connect } from 'react-redux'
import { NavBar, InputItem, WingBlank, WhiteSpace, TextareaItem, Button } from 'antd-mobile'
import { Redirect } from 'react-router-dom'

import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import { update } from '../../redux/user.redux'

@connect(
  state=>state.user,
  { update } 
)
class geniusInfo extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: '',
      avatar: '',
      desc:''
    }
  }
  
  onChange(key, value) {
    this.setState({[key]:value})
  }

  render() {
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return (
      <div>
        {redirect&&redirect!==path?<Redirect to='/boss'></Redirect>:null}
        <NavBar mode="dark">牛人信息完善</NavBar>
        <AvatarSelector
          selectAvatar={ imagename=>{
            this.setState({avatar: imagename})
          }}
        ></AvatarSelector>
        <WhiteSpace/>
        <WhiteSpace/>
        <WhiteSpace/>
        <WingBlank>
          <InputItem onChange={v=>this.onChange('title',v)}>
            求职岗位
          </InputItem>
          <WhiteSpace/>
          <TextareaItem 
            title='个人简介'
            rows = {2}
            autoHeight
            onChange={v=>this.onChange('desc',v)}
          />
          <WhiteSpace/>
          <WhiteSpace/>
          <Button 
            type='primary'
            onClick = {()=>this.props.update(this.state)}
          >保存</Button>
        </WingBlank>
        
      </div>
    )
  }
}

export default geniusInfo

