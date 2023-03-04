import React,{useEffect} from 'react'
import HeadingWallpaper from '../Common/HeadingWallpaper'
import img from '../Assets/carousel-1.jpg'
import HeadingContainer from '../Common/HeadingContainer'
import Footer from '../Components/Footer'
import OurTeam from '../Components/OurTeam'
import LazyLoad from 'react-lazyload'
import headingImage from '../Assets/about.jpg'
import OurPurpose from '../Components/OurPurpose'
import OurMethodology from '../Components/OurMethodology'

const About = () => {

  const headingContainerContent = {
    topic: "About Us",
    subTopic: "Welcome to eLEARNING",
    socialVisible: true,
    readMoreVisible: false,
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div >
      <HeadingWallpaper img={img} heading="About Us" headLink="About" />

      <HeadingContainer  headingContainerContent={headingContainerContent}/>

      <LazyLoad ><OurMethodology /></LazyLoad>

      <LazyLoad ><OurPurpose /></LazyLoad>

      <LazyLoad ><OurTeam /></LazyLoad>

      <LazyLoad > <Footer /></LazyLoad>

    </div>
  )
}

export default About