import React from 'react'
import {BsFacebook, BsTwitter, BsLinkedin} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer className='grid grid-four-column'>
        <div className="footer-section">
            <img src="images/tlogo.png" alt=""  className='tlogo'/>
            <span className='fspan'>Hitof Store</span>
            <p className='fdesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, esse pariatur quod optio illum dolores.</p>
        </div>
        <div className="footer-section">
            <h5>Subscribe to get important updates</h5>
            <input type="email" placeholder='    Enter your Email' className='finput'/>
            <button>Subscribe</button>
        </div>

        <div className="footer-section">
            <h4 className='fspan'>Follow Us</h4>
            <BsFacebook className='ficon'/>
            <AiFillYoutube  className='ficon'/>
            <BsTwitter  className='ficon'/>
            <BsLinkedin  className='ficon'/>
        </div>

        <div className="footer-section">
        <h4 className='fspan'>Call Us</h4>
        <p className='fspan'>+8801790365179</p>
        </div>
    </footer>
  )
}

export default Footer