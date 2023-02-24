import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import MyCarousel from '../Components/MyCarousel'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import PopularCourses from '../Components/PopularCourses'
import AboutHeader from '../Components/AboutHeader'
import Testimonial from '../Components/Testimonial'
import Process from '../Components/Process'
import  LazyLoad  from 'react-lazyload';




const Home = () => {
  

  return (
    <div>
        <MyCarousel/>

        {/* <LazyLoad height={200} offset={20}> */}
          <AboutHeader readMoreVisible = {true}/>
        {/* </LazyLoad> */}

        <LazyLoad height={200} offset={20}>
        <ServiceCard />
        </LazyLoad>

        <LazyLoad height={200} offset={20}>
        <PopularCourses/>
        </LazyLoad>

        <LazyLoad height={200} offset={20}>
        <Features/>
        </LazyLoad>
        
        <LazyLoad height={200} offset={20}>
        <Process/>
        </LazyLoad>
       
        <LazyLoad height={200} offset={20}>
        <Testimonial/>
        </LazyLoad>
        
       
        
       
        <Footer/>
    </div>
  )
}

export default Home