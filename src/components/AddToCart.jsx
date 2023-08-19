import React, { useState } from 'react'
import {FaCheck} from 'react-icons/fa'
import AmountToggle from './AmountToggle';
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../context/CartContext';


const AddToCart = ({product}) => {


    const {id, colors, stock} = product;
   const {addToCart} = useCartContext();

    // console.log(product);

    const [color,setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setIncrease = () =>
    {
       stock>amount ? setAmount(amount+1): setAmount(stock)
    }

    const setDecrise = () =>
    {
        amount>1 ? setAmount(amount-1): setAmount(1)
    }

  return (
    <>
    <div className="color-style">
        <p>Color:</p>
        {
            colors.map((curColor, index) => { 
                return <button 
                key={index}
                 style={{backgroundColor:curColor}}
                  className={color === curColor ? "color-btn activebtn": "color-btn"}
                  onClick={() => setColor(curColor)}>
                    {color === curColor ? <FaCheck className='check-icon'/>: null}
                    </button>
            })
        }
    </div>
        <AmountToggle amount={amount} setIncrease={setIncrease} setDecrise={setDecrise} />
        <NavLink to='/cart' onClick={() => addToCart(id,color,amount, product)}><button>Add To Cart</button></NavLink>
        </>
  )
}

export default AddToCart