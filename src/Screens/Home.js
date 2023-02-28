import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import MyCarousel from '../Components/MyCarousel'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import PopularCourses from '../Components/PopularCourses'
import HeadingContainer from '../Common/HeadingContainer'
import Testimonial from '../Components/Testimonial'
// import Process from '../Components/Process'
import  LazyLoad  from 'react-lazyload';
import headingImage from '../Assets/about.jpg'



const Home = () => {
  
  const headingContainerContent = {
    topic: "About Us",
    socialVisible: true,
    readMoreVisible: true,
    para1: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    para2: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    bulletPoints1: "Skilled Instructors", 
    bulletPoints2: "Skilled Instructors",  
    bulletPoints3: "Skilled Instructors",  
    bulletPoints4: "Skilled Instructors",  
    bulletPoints5: "Skilled Instructors",  
    bulletPoints6: "Skilled Instructors",  
    img: headingImage
  }

  return (
    <div>
        <MyCarousel/>

        {/* <LazyLoad height={200} offset={20}> */}
          <HeadingContainer headingContainerContent={headingContainerContent}/>
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
        
        {/* <LazyLoad height={200} offset={20}>
        <Process/>
        </LazyLoad> */}
       
        <LazyLoad height={200} offset={20}>
        <Testimonial/>
        </LazyLoad>
        
       
        
       
        <Footer/>
    </div>
  )
}

export default Home