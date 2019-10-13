// components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/projects'>My projects</Link></li>

        <li><Link to='/projects' style={{ textDecoration: 'none' }}>Projects link</Link></li>

        <li><NavLink to="/projects" activeClassName="selected" >FAQs</NavLink></li>
        <li><NavLink to="/projects" activeStyle={{fontWeight: 'bold', color: 'red' }} >FAQ22</NavLink></li>
        <li><NavLink  exact  to="/projects" activeStyle={{fontWeight: 'bold', color: 'red' }} >paco</NavLink></li>
        <li><NavLink  strict   to="/pepe" activeStyle={{fontWeight: 'bold', color: 'red' }} >pepe</NavLink></li>
      </ul>
    </nav>
  )
}

export default navbar;