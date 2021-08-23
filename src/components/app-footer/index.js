import React, { memo } from 'react'
import { FooterWrapper } from './style'
import { Divider } from 'antd'

export default memo(function AppFooter() {
  return (
    <FooterWrapper>
      <div className='wrap-v2'>
        <span>Email: 925930071@qq.com</span>
        <Divider />
        <span>Copyright © 2021 Xanadu Inc. All rights reserved.</span>
      </div>
    </FooterWrapper>
  )
})
