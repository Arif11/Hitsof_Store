import React from 'react'
import {NavLink} from 'react-router-dom'
import PriceFormat from './PriceFormat';

const Product = ({curElem}) => {
const {id, name, image, category, price, description} = curElem;
  return (
    <NavLink className='product-desc' to={`/singleproduct/${id}`}>
        <div className="card">
            <figure>
                <img src={image} alt={name} />
                <figcaption className='caption'>{category}</figcaption>
            </figure>
            <div className="card-data">
                <div className="data-flex">
                    <h3>{name}</h3>
                    <h4>{<PriceFormat price={price}/>}</h4>
                </div>
            </div>
        </div>
    </NavLink>
  )
}

export default Product