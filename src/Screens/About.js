import React,{useEffect} from 'react'
import HeadingWallpaper from '../Common/HeadingWallpaper'
import img from '../Assets/about.jpg'
import HeadingContainer from '../Common/HeadingContainer'
import Footer from '../Components/Footer'
import OurTeam from '../Components/OurTeam'
import LazyLoad from 'react-lazy-load'
import OurPurpose from '../Components/OurPurpose'
import OurMethodology from '../Components/OurMethodology'
import { Player } from '@lottiefiles/react-lottie-player';


const About = () => {

  const headingContainerContent = {
    topic: "About Us",
    subTopic: "Welcome to TechnoShaala",
    socialVisible: false,
    readMoreVisible: false,
    para1: "Welcome to TechnoShaala, a leading software training institute in India that offers comprehensive and industry-relevant courses to help you advance your career.",
    para2: "Our mission is to empower aspiring software professionals with the skills and knowledge they need to succeed in today's fast-paced and competitive job market. Whether you're a fresh graduate or a working professional looking to upskill, we've got the perfect course for you.",
    bulletPoints1: "Industry-relevant curriculum", 
    bulletPoints2: "Experienced faculty",  
    bulletPoints3: "Flexible learning options",  
    bulletPoints4: "Placement Assistance",  
    bulletPoints5: "Affordable pricing",  
    bulletPoints6: "Community Buliding",  
    para3: "Join us today and take the first step towards a successful career in software.",
    anim: <Player autoplay loop speed="2" src="https://assets1.lottiefiles.com/packages/lf20_ikvz7qhc.json" style={{ height: '500px', width: '550px' }}/>
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div >
      <HeadingWallpaper img={img} heading="About Us" headLink="About" />

      <HeadingContainer  headingContainerContent={headingContainerContent}/>

      <LazyLoad offset={20}><OurMethodology /></LazyLoad>

      <LazyLoad offset={20}><OurPurpose /></LazyLoad>

      <LazyLoad offset={20}><OurTeam /></LazyLoad>

      <LazyLoad offset={20}><Footer /></LazyLoad>

    </div>
  )
}

export default About