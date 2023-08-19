import React from 'react'
import Filter from '../components/Filter'
import Sort from '../components/Sort'
import ProductSection from '../components/ProductSection'
import { useFilterContext } from '../context/FilterContext'

const Products = () => {
  const {FilterProducts} = useFilterContext();
  return (
    <div className=' products-section'>
      <div className="filter-section">
        <Filter />
      </div>
      <div className="products-sector">
        <div className="sort-section">
          <Sort />
        </div>
        <div className="main-products">
          <ProductSection />
        </div>
      </div>
    </div>
  )
}

export default Products