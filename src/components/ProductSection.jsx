import React from 'react'
import { useFilterContext } from '../context/FilterContext'
import GridView from './GridView';
import ListView from './ListView';

const ProductSection = () => {

  const {FilterProducts, Grid_View} = useFilterContext();


  if(Grid_View == true)
  {
    return <GridView products={FilterProducts}/>
  }

  if(Grid_View === false)
  {
    return <ListView products={FilterProducts}/>
  }
}

export default ProductSection