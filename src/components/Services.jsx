import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdLocalShipping} from 'react-icons/md'
import {FaPiggyBank} from 'react-icons/fa'
import {RiSecurePaymentFill} from 'react-icons/ri'


const Services = () => {
  return (
    <div className="service-container">
        <div className="services">
            <TbTruckDelivery className='icon'/>
            <h3>Super Fast and free Delivery</h3>
        </div>
        <div className='services bg'>
            <div className="bg-1">
                <MdLocalShipping className='icon'/>
                <h3>Non-contact Shipping</h3>
            </div>

            <div className="bg-1">
                <FaPiggyBank className='icon'/>
                <h3>Money-back Guaranteed</h3>
            </div>
                </div>
        <div className="services">
            <RiSecurePaymentFill className='icon'/>
            <h3>Super Secure Payment System</h3>
        </div>
        </div>
  )
}

export default Services