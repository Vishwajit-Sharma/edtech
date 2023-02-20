import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import MyCarousel from '../Components/MyCarousel'
import Features from '../Components/Features'
import Footer from '../Components/Footer'

const Home = () => {
  

  return (
    <div>
        <MyCarousel/>
        <ServiceCard />
        <Features/>
        <Footer/>
    </div>
  )
}

export default Home