import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useGlobalContext } from '../context/Usecontext';
import {NavLink} from 'react-router-dom'
import ImageSingle from '../components/ImageSingle';
import PriceFormat from '../components/PriceFormat';
import {TbTruckDelivery, TbReplace} from 'react-icons/tb'
import {MdSecurity} from 'react-icons/md'
import Star from '../components/Star';
import AddToCart from '../components/AddToCart';

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {

  const {getSingleProduct, isSingleLoading, singleProduct} = useGlobalContext();
  
  const {id: sID, name, image, company, description, price, reviews, stars, stock} = singleProduct;

  const {id} =  useParams();

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);


  if(isSingleLoading)
  {
    return <h1>Loading..........</h1>
  }


  return (
    <div>
      <div className="sheading">
        <NavLink to='/' className='snavlink'>Home</NavLink>/{name}
      </div>
      <div className="grid grid-column-two single-container">
        <div className="images-section">
          <ImageSingle image={image}/>
        </div>
        <div className="single-data-box">
          <h1 className='singletitle'>{name}</h1>
          <Star stars={stars} reviews={reviews}/>
          <h4>MRP:<del><PriceFormat price={price+250000}/></del></h4>
          <h3 className='deal'>Deal of the Day:{<PriceFormat price={price}/>}</h3>
          <p>{description}</p>
          <div className="warenty-section">
            <div className="warenty">
            <TbTruckDelivery className='warenty-icon' />
            <p>Free Delivery</p>
            </div>

            <div className="warenty">
            <TbReplace className='warenty-icon' />
            <p>30 Days Replacement</p>
            </div>

            <div className="warenty">
            <TbTruckDelivery className='warenty-icon' />
            <p>Hitsof Delivered</p>
            </div>

            <div className="warenty">
            <MdSecurity className='warenty-icon' />
            <p>2 Year Warranty</p>
            </div>
          </div>
            <hr />

            <p>Available: <span className='fontweight'>{stock>0 ? "In Stock" : "Not Available"}</span></p>
            <p>Brand: <span className='fontweight'>{company}</span></p>

            <hr />
            {stock > 0 && <AddToCart product={singleProduct}/>}
        </div>
      </div>
    </div>
  )
}

export default SingleProduct