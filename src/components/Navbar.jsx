import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {BsCart4} from 'react-icons/bs'
import {CgClose, CgMenu} from 'react-icons/cg'
import { useCartContext } from '../context/CartContext'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const {total_item} = useCartContext();
  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
        <ul className='navbox'>
            <li onClick={() => setNavbar(false)}><NavLink to='/' className='navlink border'>Home</NavLink></li>
            <li onClick={() => setNavbar(false)}><NavLink to='/about' className='navlink border'>About</NavLink></li>
            <li onClick={() => setNavbar(false)}><NavLink to='/products' className='navlink border'>Products</NavLink></li>
            <li onClick={() => setNavbar(false)}><NavLink to='/contact' className='navlink border'>Contact</NavLink></li>
            <div className="cart-box">
            <li onClick={() => setNavbar(false)}><NavLink to='/cart' className='navlink cart-icon'><BsCart4 /></NavLink></li>
            <span className='cart-items'>{total_item}</span>
            </div>
        </ul>

        <div className="menu-icons">
            <CgMenu className='menu-link' onClick={() => setNavbar(true)}/>
            <CgClose className='menu-link menu-close' onClick={() => setNavbar(false)} />
        </div>
    </nav>
  )
}

export default Navbar