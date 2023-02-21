import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import MyCarousel from '../Components/MyCarousel'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import PopularCourses from '../Components/PopularCourses'
import AboutHeader from '../Components/AboutHeader'



const Home = () => {
  

  return (
    <div>
        <MyCarousel/>
        <AboutHeader/>
        
        <ServiceCard />
       
        <PopularCourses/>
        <Features/>
        <Footer/>
    </div>
  )
}

export default Home