import React from 'react'
import { useFilterContext } from '../context/FilterContext'
import {FaCheck} from 'react-icons/fa'
import PriceFormat from './PriceFormat';

const Filter = () => {

  

  const {filters:{text, category, colors, price, max_price, min_price}, UpdateFilterValue, AllProducts, ClearFilters} = useFilterContext();

  // console.log(AllProducts);

  const getUnitData = (data, property) =>
  {
   let newval = data.map((curElem) => {
      return curElem[property];
    })

    if(property === "colors")
    {
      // return newval = ["All", ...new Set([].concat(...newval))]
      newval= newval.flat();
    } 

      return newval = ["All", ...new Set(newval)]
    
  }

  const CatagoryOnlyData = getUnitData(AllProducts, "category");
  const CompanyOnlyData = getUnitData(AllProducts, "company");
  const ColorOnlyData = getUnitData(AllProducts, "colors");


  return (
    <div className='filter-flex-box'>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <input type="text" name='text' value={text} onChange={UpdateFilterValue} className='search-box' placeholder='  SEARCH...'/>
      </form>

      <div className="category-filter">
        <h3>Category:</h3>
        <div className="display-flex-column">
        
          {
            CatagoryOnlyData.map((curElem, index) => 
              <button key={index} className={curElem === category ? 'btn-category active': 'btn-category'} name='category' value={curElem} onClick={UpdateFilterValue} >{curElem}</button>
            )
          }
        
        </div>
      </div>

      <div className="company-filter">
        <h3>Company:</h3>
        <select name='company' className='company-select' onClick={UpdateFilterValue}>
          {
            CompanyOnlyData.map((curElem, index) => {
              return <option key={index} value={curElem}>{curElem}</option>
            })
          }
        </select>
      </div>

      <div className="color-filter">
        <h3>Colors:</h3>
        <div className="color-filter-box">
        {
          ColorOnlyData.map((curElem, index) => {
            if(curElem == "All")
            {
            return <button key={index} className='filter-all-btn'  value={curElem} name='colors' onClick={UpdateFilterValue}>ALL</button>
            }
            return <button key={index} className={colors == curElem ? 'color-btn color-margin activebtn': 'color-btn color-margin'} style={{backgroundColor:curElem}} value={curElem} name='colors' onClick={UpdateFilterValue}>{colors === curElem ? <FaCheck className='check-icon'/>: null}</button>
          })
        }
        </div>
      </div>

      <div>
        <h3>Price:</h3>
        <p>{<PriceFormat price={price}/>}</p>
        <input type="range" name="price" min={min_price} max={max_price} value={price} onChange={UpdateFilterValue}/>
      </div>

      <div className="clear-filter">
        <button className='clear-filter-btn' onClick={ClearFilters}>Clear Filters</button>
      </div>
    </div>
  )
}

export default Filter