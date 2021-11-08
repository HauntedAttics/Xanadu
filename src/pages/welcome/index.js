import React, { memo } from 'react'
import { WelcomeWrapper } from './style'
import { Divider } from 'antd'

export default memo(function Welcome() {

  //Back to the top when entering this page.
  document.documentElement.scrollTop = 0
  
  return (
    <WelcomeWrapper>
      <div>
        <h2>欢迎来到</h2>
        <h1>仙 乐 都</h1>
        <Divider />
        <h3>轻敲导航栏开始探索。</h3>
      </div>
    </WelcomeWrapper>
  )
})
