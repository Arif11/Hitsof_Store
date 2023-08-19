import React from 'react'
import { useCartContext } from '../context/CartContext'
import { NavLink } from 'react-router-dom';
import CartItems from '../components/CartItems';
import PriceFormat from '../components/PriceFormat';

const Cart = () => {
  const {cart, ClearCart, total_price, shipping_fee} = useCartContext();

  if(cart.length == 0)
  {
    return <div className='cart-empty'>
      <img src="/images/empty.png" alt="" />
      <NavLink to="/products"><button className='cart-btn'>continue shopping</button></NavLink>
      </div>
  }
  return (
    <div className='cart'>
      <div className="cart-title">
        <p>Items</p>
        <p className='cart-hide'>Price</p>
        <p>Quantity</p>
        <p className='cart-hide'>Subtotal</p>
        <p>Remove</p>
      </div>
      <hr />

      <div className="cart-products">
        {
          cart.map( (curElem, index) => <CartItems key={index} curElem={curElem}/>)
        }
      </div>
      <hr />

      <div className="cart-btns">
      <NavLink to="/products"><button className='cart-btn'>continue shopping</button></NavLink>
      <button className='cart-btn del' onClick={ClearCart}>clear cart</button>
      </div>

      <div className="cart-total">
        <div className="cart-subtotal">
          <div className="sub-div">
          <p>Subtotal:</p>
          <p>{<PriceFormat price={total_price}/>}</p>
          </div>

          <div className="sub-div">
            <p>Shipping Fee:</p>
            <p>{<PriceFormat price={shipping_fee}/>}</p>
          </div>

          <hr />

          <div className="sub-div">
          <p>Order Total:</p>
          <p>{<PriceFormat price={total_price+shipping_fee}/>}</p>
          </div>
        
        
        
        
        </div>
      </div>
    </div>
  )
}

export default Cart