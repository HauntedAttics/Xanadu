import React, { memo } from 'react'
import { WelcomeWrapper } from './style'
import { Divider } from 'antd'

export default memo(function Welcome() {

  //Back to the top when entering this page.
  document.documentElement.scrollTop = 0
  
  return (
    <WelcomeWrapper>
      <div>
        <h2>Welcome to</h2>
        <h1>XANADU</h1>
        <Divider />
        <h3>Tap on the navigation bar to explore.</h3>
      </div>
    </WelcomeWrapper>
  )
})
