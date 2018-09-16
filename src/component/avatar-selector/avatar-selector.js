import React from 'react'
import { Grid, List } from 'antd-mobile'
import PropTypes from 'prop-types'

class AvatarSelector extends React.Component{
  static propTypes = {
    selectAvatar: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state={}
  }
  
  render() {
    const avatarList = 
    'apple,banana,cantaloupe,cherry,coconut,dragon,grape,lemon,litchi,longan,mango,papaya,peach,pear,strawberry'
    .split(',').map(v=>({
      icon: require(`../img/${v}.png`),
      text: v
    }))
    const gridHeader = this.state.text?(<div>
                                          <span>已选择头像</span>
                                          <img style={{width:20}} src={this.state.icon} alt=''></img>
                                        </div>)
                                        :'请选择头像'
    return (
      <div>
        <List renderHeader={()=>gridHeader}>
          <Grid data={avatarList}
            columnNum={5}
            onClick = {elm=>{
              this.setState(elm)
              this.props.selectAvatar(elm.text)
            }}
          />
        </List>
      </div>
    )
  }
}

export default AvatarSelector