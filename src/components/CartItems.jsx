import React from 'react'
import PriceFormat from '../components/PriceFormat';
import {ImBin} from 'react-icons/im'
import AmountToggle from './AmountToggle';
import { useCartContext } from '../context/CartContext';



const CartItems = ({curElem}) => {
    const {id, image, name, color, price, amount} = curElem;

    const {RemoveCart, setIncrease, setDecrise} = useCartContext();
  
    // const setIncrease = () =>
    // {
    // //    stock>cartAmount ? setCartAmount(amount+1): setCartAmount(stock)
    // }

    // const setDecrise = () =>
    // {
    //     // cartAmount>1 ? setCartAmount(amount-1): setCartAmount(1)
    // }


    return <div className="cart-container">
      <div className="cart-image-box" >
      <img src={image} alt="" />
      <div>
      <h3 className='img-title'>{name}</h3>
      <p className='color-div'>color: {<button style={{backgroundColor:color}} className='cart-color'></button>}</p>
      </div>
      </div>
      <p className='cart-hide'>{<PriceFormat price={price}/>}</p>
      <div className="cart-quantity">
      <AmountToggle amount={amount} setIncrease={() => setIncrease(id)} setDecrise={() => setDecrise(id)} />
      </div>
      <p className='cart-hide'>{<PriceFormat price={price*amount}/>}</p>
      <button className='btn-remove' onClick={() => RemoveCart(id)}><ImBin className='remove-icon'/></button>
    </div>
      }
   
    


export default CartItems