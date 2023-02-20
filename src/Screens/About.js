import React from 'react'
import HeadingWallpaper from '../Components/HeadingWallpaper'
import img from '../Assets/carousel-1.jpg'
import AboutHeader from '../Components/AboutHeader'
import Footer from '../Components/Footer'

const About = () => {


  return (
    <div >
      <HeadingWallpaper img={img} heading="About Us" headLink="About"/>

          <AboutHeader/>
          <Footer/>
     
      About
    
    </div>
  )
}

export default About