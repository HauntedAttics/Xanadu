import React, { memo, Suspense } from 'react'

import { renderRoutes } from 'react-router-config'

import routes from './router'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min'

import { Spin } from 'antd'

import 'antd/dist/antd.less'

export default memo(function App() {
  return (
    <HashRouter>
      <AppHeader />
      {/* The pre-loading effect before the page is loaded. */}
      <Suspense fallback={<div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#000000'
      }}>
        <Spin size='large'/>
      </div>}>
        {renderRoutes(routes)}
      </Suspense>
      <AppFooter/>
    </HashRouter>
  )
})
