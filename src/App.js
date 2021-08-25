import React, { memo, Suspense } from 'react'

import { renderRoutes } from 'react-router-config'

import routes from './router'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min'

import { Spin } from 'antd'

export default memo(function App() {
  return (
    <HashRouter>
      <AppHeader/>
      <Suspense fallback={<div style={{minHeight: '100vh', background: '#000000'}}><Spin size='large'/></div>}>
        {renderRoutes(routes)}
      </Suspense>
      <AppFooter/>
    </HashRouter>
  )
})
