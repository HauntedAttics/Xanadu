import React, { memo } from 'react'
import { headerLinks } from '../../common/local-data'
import { NavLink } from 'react-router-dom'
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'

export default memo(function AppHeader() {

  //The first three buttons for routing jump.
  //The button after more than three jumps to the specified link.
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
        </NavLink>
      )
    } else {
      return (
        <a href={item.link}>
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href='#/' className="logo">
            <h1 style={{ color: 'white' }}>仙乐都</h1>
          </a>
        </HeaderLeft>
        <HeaderRight>          
          <div className="select-list">
            {/* Traverse and return the selected item. */}
              {
                headerLinks.map((item, index) => {
                  return (
                    <div key={item.title} className='select-item'>
                      {showSelectItem(item, index)}
                    </div>
                  )
                })
              }
          </div>
        </HeaderRight>
      </div>
    </HeaderWrapper>
  )
})
