import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Trusted from '../components/Trusted'
import FeatureProducts from '../components/FeatureProducts'

const Home = () => {
  return (
    <div>
      <HeroSection name="Hitsof Store"/>
      <FeatureProducts />
      <Services />
      <Trusted />
    </div>
  )
}

export default Home