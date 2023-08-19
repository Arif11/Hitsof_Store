import React from 'react'
import Product from './Product'
import { useFilterContext } from '../context/FilterContext';

const GridView = ({products}) => {
  const {FilterProducts} = useFilterContext();

  return (
    <div className={FilterProducts.length < 3 ? "grid-repeat repeat": "grid-repeat"}>
        {
            products.map((curElem) => <Product key={curElem.id} curElem={curElem}/>)
        }
    </div>
  )
}

export default GridView