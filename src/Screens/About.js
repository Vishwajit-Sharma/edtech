import React,{useEffect} from 'react'
import HeadingWallpaper from '../Common/HeadingWallpaper'
import img from '../Assets/carousel-1.jpg'
import HeadingContainer from '../Common/HeadingContainer'
import Footer from '../Components/Footer'
import Team from '../Components/Team'
import LazyLoad from 'react-lazyload'
import OurStory from '../Components/OurStory'
import headingImage from '../Assets/about.jpg'

const About = () => {

  const headingContainerContent = {
    topic: "About Us",
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

      <LazyLoad  height={200} offset={20}><OurStory /></LazyLoad>

      <LazyLoad  height={200} offset={20}><Team /></LazyLoad>

      <LazyLoad height={200} offset={20}> <Footer /></LazyLoad>

    </div>
  )
}

export default About