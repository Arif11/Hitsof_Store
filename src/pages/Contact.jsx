import React from 'react'



const Contact = () => {



  return (
    <div className='flex'>
      <h2 className='contact-title'>Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8936553192193!2d90.38806817420709!3d23.751171388748908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bcd681372b%3A0x5c2b8755e4327004!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1691922867047!5m2!1sen!2sbd" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <form action="https://formspree.io/f/xwkdpojo" method='POST' className='contact-form'>
        <input type="text" placeholder='   Enter your Username' name='Username' required autoComplete='off'/>
        <input type="email" name="Email" placeholder='   Enter your Email' required autoComplete='off' />
        <textarea name="Message" cols="70" rows="10" placeholder='   Enter your Message' required autoComplete='off' ></textarea>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Contact