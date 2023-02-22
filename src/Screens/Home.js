import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import MyCarousel from '../Components/MyCarousel'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import PopularCourses from '../Components/PopularCourses'
import AboutHeader from '../Components/AboutHeader'
import Testimonial from '../Components/Testimonial'
import Process from '../Components/Process'




const Home = () => {
  

  return (
    <div>
        <MyCarousel/>

        
        <AboutHeader/>
        
        <ServiceCard />
       
        <PopularCourses/>
        <Features/>
        <Process/>
       <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home