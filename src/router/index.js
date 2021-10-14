import React from 'react'

//Lazy page loading.
const Wallpapers = React.lazy(() => import('../pages/wallpapers'))
const Dashboard = React.lazy(() => import('../pages/dashboard'))
const Home = React.lazy(() => import('../pages/home'))
const Welcome = React.lazy(() => import('../pages/welcome'))

const routes = [
  {
    path: "/",
    exact: true,
    component: Welcome
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/dashboard",
    component: Dashboard
  },
  {
    path: "/wallpapers",
    component: Wallpapers
  }
]

export default routes