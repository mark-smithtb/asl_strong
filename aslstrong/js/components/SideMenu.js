import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class SideMenu extends Component {
  render()  {
    return (
      <div class="sideMenu">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/categories">Categories</NavLink></li>
          <li><NavLink to="/Dictionary/English">English Dictionary</NavLink></li>
          <li><NavLink to="/Dictionary/HandShape">Handshape Dictionary</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default SideMenu
