import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex'>
        <div className='errorpage'>
      
      </div>
      <NavLink to='/'><button>Go to HomePage</button></NavLink>
    </div>
  )
}

export default ErrorPage