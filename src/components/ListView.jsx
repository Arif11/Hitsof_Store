import React from 'react'
import PriceFormat from './PriceFormat'
import { NavLink } from 'react-router-dom'

const ListView = ({products}) => {

  return (

    <div>
        {products.map((curElem) => {
        const {id, image, name, price, description} = curElem
        return (
          <div className="grid gridlist grid-column-two">
          <div className="card cardlist">
            <figure>
              <img src={image} alt={name} />
            </figure>
          </div>
          <div className="Listdesc">
            <h2 className='list-title'>{name}</h2>
            <p className='price'>{<PriceFormat price={price}/>}</p>
            <p>{description.slice(0,90)}....</p>
            <NavLink to={`/singleproduct/${id}`}><button>Read More...</button></NavLink>
          </div>
          </div>
        )
      })}
    </div>
    

  )
}

export default ListView