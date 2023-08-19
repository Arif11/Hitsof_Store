import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = ({name}) => {
  return (
    <div className="container">
        <div className="grid grid-column-two">
        <div className="herosection-data">
            <p className='title'>Welcome to</p>
            <h1 className='heading'>{name}</h1>
            <p className='desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus nulla nobis eveniet repellat deleniti asperiores ad, itaque obcaecati vero quibusdam omnis? Voluptatibus eius corporis fugiat itaque, pariatur animi deleniti quis!</p>
            <NavLink to='/products'><button>Shop Now</button></NavLink>
        </div>
        <div className="hero-img">
            <img src="images/hero.png" alt="" className='heroimg' />
        </div>
        </div>
    </div>
  )
}

export default HeroSection