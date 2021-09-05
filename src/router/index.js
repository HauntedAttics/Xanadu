import React from 'react'

//Lazy page loading.
const Wallpapers = React.lazy(() => import('../pages/wallpapers'))
const FilmRolls = React.lazy(() => import('../pages/film-rolls'))
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
    path: "/film-rolls",
    component: FilmRolls
  },
  {
    path: "/wallpapers",
    component: Wallpapers
  }
]

export default routes