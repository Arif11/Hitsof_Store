import React from 'react'
import { useFilterContext } from '../context/FilterContext'
import {BsFillGridFill} from 'react-icons/bs'
import {RiFileListFill} from 'react-icons/ri'

const Sort = () => {
  const {setGridView, setListView, Grid_View, FilterProducts, Sort} = useFilterContext();
  return (
    <div className="filter-flex">
      <div className="grid-list">
      <button onClick={() => setGridView()} className={Grid_View === true ? "btn-view active": "btn-view"}><BsFillGridFill className='icon-view'/></button>
    <button onClick={() => setListView()} className={Grid_View === true ? "btn-view": "btn-view active"}><RiFileListFill className='icon-view'/></button>
      </div>
      <div>
        <p>{FilterProducts.length} Products Available</p>
      </div>
      <div>
        <form action="#">
          <select name="sort" id="sort" onClick={Sort}>
            <option value="lowest">Price(Lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(Highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(A-Z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(Z-A)</option>
          </select>
        </form>
      </div>
  </div>
  )
}

export default Sort