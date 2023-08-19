import React from 'react'
import { useGlobalContext } from '../context/Usecontext'
import Product from './Product';

const FeatureProducts = () => {

  const {featureproducts} = useGlobalContext();
  return (
    <section>
      <h3>Check Now!</h3>
      <h1>Our Feature Services</h1>
      <div className="grid-repeat">
        {
          featureproducts.map((curElem) => <Product key={curElem.id} curElem={curElem} />)
        }
      </div>
    </section>
  )
}

export default FeatureProducts