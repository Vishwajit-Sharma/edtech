import React,{useEffect} from 'react'
import HeadingWallpaper from '../Components/HeadingWallpaper'
import img from '../Assets/carousel-1.jpg'
import AboutHeader from '../Components/AboutHeader'
import Footer from '../Components/Footer'
import Team from '../Components/Team'
import LazyLoad from 'react-lazyload'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div >
      <HeadingWallpaper img={img} heading="About Us" headLink="About" />

      <LazyLoad height={100} offset={20}><AboutHeader readMoreVisible={false} /></LazyLoad>

      <LazyLoad  height={200} offset={20}><Team /></LazyLoad>

      <LazyLoad height={200} offset={20}> <Footer /></LazyLoad>

    </div>
  )
}

export default About