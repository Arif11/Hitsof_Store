import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <NavLink to='/'><img src="images/logo.png" alt="" className='logo'/></NavLink>
        <Navbar />
    </header>
  )
}

export default Header