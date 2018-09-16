import React from 'react'

import logoImg from './icon.png'
import './logo.css'

class logo extends React.Component{
  render() {
    return (
      <div className='logoContainer'>
        <img src={logoImg} alt=''></img>
      </div>
    )
  }
}

export default logo