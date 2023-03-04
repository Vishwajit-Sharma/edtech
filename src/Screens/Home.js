import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import MyCarousel from '../Components/MyCarousel'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import PopularCourses from '../Components/PopularCourses'
import HeadingContainer from '../Common/HeadingContainer'
import Testimonial from '../Components/Testimonial'
import  LazyLoad  from 'react-lazyload';
import headingImage from '../Assets/about.jpg'



const Home = () => {
  
  const headingContainerContent = {
    topic: "About Us",
    subTopic: "Welcome to Vishwa EdTech",
    socialVisible: false,
    readMoreVisible: true,
    para1: "Welcome to Vishwa EdTech, a leading software training institute in India that offers comprehensive and industry-relevant courses to help you advance your career.",
    para2: "Our mission is to empower aspiring software professionals with the skills and knowledge they need to succeed in today's fast-paced and competitive job market. Whether you're a fresh graduate or a working professional looking to upskill, we've got the perfect course for you.",
    bulletPoints1: "Industry-relevant curriculum", 
    bulletPoints2: "Experienced faculty",  
    bulletPoints3: "Flexible learning options",  
    bulletPoints4: "Placement Assistance",  
    bulletPoints5: "Affordable pricing",  
    bulletPoints6: "Community Buliding",  
    img: headingImage,
    para3: "Join us today and take the first step towards a successful career in software.",
  }

  return (
    <div>
        <MyCarousel/>

        <HeadingContainer headingContainerContent={headingContainerContent}/>

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
        <Testimonial/>
        </LazyLoad> */}
        
       
        
       
        <Footer/>
    </div>
  )
}

export default Home