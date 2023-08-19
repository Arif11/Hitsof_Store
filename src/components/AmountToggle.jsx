import React from 'react'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {FaMinusCircle} from 'react-icons/fa'

const AmountToggle = ({amount, setIncrease, setDecrise}) => {
  return (
    <>
    <div className='amount-flex'>
        <button onClick={() => setDecrise()} className='amount-btn'><FaMinusCircle className='amount-icon' /></button>
        <h3 className='amount'>{amount}</h3>
        <button onClick={() => setIncrease()} className='amount-btn'><BsFillPlusCircleFill className='amount-icon'/></button>
    </div>
        
        </>
  )
}

export default AmountToggle