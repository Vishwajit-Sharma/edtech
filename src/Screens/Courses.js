import React, { useEffect } from 'react'
import HeadingWallpaper from '../Common/HeadingWallpaper'
import img from '../Assets/carousel-2.jpg'
import CoursesCategory from '../Components/CoursesCategory'
import headingImage from '../Assets/about.jpg'
import HeadingContainer from '../Common/HeadingContainer'
import CourseCard from '../Common/CourseCard'
import HeadingTitle from '../Common/HeadingTitle'
import Footer from '../Components/Footer'
import LazyLoad from 'react-lazyload';
import webDesignImg from '../Assets/webDesign.png'
import reactImg from '../Assets/react.jpg'
import javascriptImg from '../Assets/javascript.jpg'
import pythonImg from '../Assets/python.jpg'
import frontendImg from '../Assets/frontend.png'
import backendImg from '../Assets/backend.png'
import javaImg from '../Assets/java.jpg'
import {  FaStar, FaStarHalfAlt, FaRegStar, FaReact , FaPalette , FaCodeBranch,FaServer   } from "react-icons/fa";
import { DiPython, DiJava, DiJsBadge  } from 'react-icons/di';
import { Element } from 'react-scroll';
import FreeDemoForm from '../Common/FreeDemoForm'
import MoreButton from '../Common/MoreButton'
import { Player } from '@lottiefiles/react-lottie-player';


const Courses = () => {

  const headingContainerContent = {
    topic: "Our Courses",
    subTopic: "Welcome to the Best Courses Available",
    socialVisible: false,
    readMoreVisible: false,
    para1: "At Vishwa Edtech, we offer a wide range of software training courses to help you acquire the skills and knowledge you need to succeed in the tech industry. All our courses are designed to be practical and hands-on, with a focus on real-world applications.",
    //para2: "Our mission is to empower aspiring software professionals with the skills and knowledge they need to succeed in today's fast-paced and competitive job market. Whether you're a fresh graduate or a working professional looking to upskill, we've got the perfect course for you.",
    bulletPoints1: "Comprehensive & customizable curriculum", 
    bulletPoints2: "Experienced trainers",  
    bulletPoints3: "Practical projects",  
    bulletPoints4: "Placement Assistance",  
    bulletPoints5: "Affordable pricing",  
    bulletPoints6: "Community support",  
    img: headingImage,
    para3: "Choose from our range of courses today and take the first step towards a successful career in software. Whether you're looking to start a new career, upskill in your current job, or just explore a new area of interest, we've got the perfect course for you.",
    anim: <Player autoplay loop speed="1" src="https://assets1.lottiefiles.com/packages/lf20_hzfmxrr7.json"  background="transparent" style={{ height: '500px', width: '550px' }}/>
  }

  const cardContentDevelopment1 = {
    img: webDesignImg,
    courseName: "Web Designing",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    time: "2 Month",
    icon: <FaPalette />,
    bgColor: "bgColorFoundation",
    star: [<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,<FaStarHalfAlt/>],
    
  }
  const cardContentDevelopment2 = {
    img: frontendImg,
    courseName: "Front End Development",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    time: "2 Month",
    icon: <FaCodeBranch  />,
    bgColor: "bgColorFoundation",
    star: [<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,<FaRegStar/>],
  }
  const cardContentDevelopment3 = {
    img: backendImg,
    courseName: "Back End Development",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    time: "2 Month",
    icon: <FaServer  />,
    bgColor: "bgColorFoundation",
    star: [<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,<FaRegStar/>],
  }
  const cardContentlanguages1 = {
    img: javaImg,
    courseName: "Java",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    time: "2 Month",
    icon: <DiJava  />,
    bgColor: "bgColorFoundation",
    star: [<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,<FaRegStar/>],
  }
  const cardContentlanguages2 = {
    img: javascriptImg,
    courseName: "Advanced Javascript",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    time: "2 Month",
    icon: <DiJsBadge  />,
    bgColor: "bgColorFoundation",
    star: [<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,<FaRegStar/>],
  }
  const cardContentTrending1 = {
    img: reactImg,
    courseName: "React JS",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    time: "2 Month",
    icon: <FaReact />,
    bgColor: "bgColorFoundation",
    star: [<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,<FaStarHalfAlt/>],
  }
  const cardContentTrending2 = {
    img: pythonImg,
    courseName: "Python With Machine Learning",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    time: "2 Month",
    icon: <DiPython />,
    bgColor: "bgColorFoundation",
    star: [<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,<FaRegStar/>],
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeadingWallpaper img={img} heading="Courses" headLink="Courses" />
      <HeadingContainer headingContainerContent={headingContainerContent} />

      <LazyLoad ><CoursesCategory /></LazyLoad>

      <Element name="foundation">
        <LazyLoad >
          {<div className="container-xxl py-5" >
            <div className="container">
              <HeadingTitle title="Web development" mainTitle="Web development Courses" />
              <div className="row g-4 justify-content-center">
                <CourseCard cardContent={cardContentDevelopment1} />
                <CourseCard cardContent={cardContentDevelopment2} />
                <CourseCard cardContent={cardContentDevelopment3} />
              </div>
            </div>
          </div>}</LazyLoad>
      </Element>

      <Element name="professional">
        <LazyLoad >
          {<div className="container-xxl py-5">
            <div className="container">
              <HeadingTitle title="Languages" mainTitle="Programming Languages Courses" />
              <div className="row g-4 justify-content-center">
                <CourseCard cardContent={cardContentlanguages1} />
                <CourseCard cardContent={cardContentlanguages2} />
              </div>
            </div>
          </div>}
        </LazyLoad>
      </Element>

      <Element name="framework">
        <LazyLoad >
          {<div className="container-xxl py-5">
            <div className="container">
              <HeadingTitle title="Trending" mainTitle="Trending Courses" />
              <div className="row g-4 justify-content-center">
                <CourseCard cardContent={cardContentTrending1} />
                <CourseCard cardContent={cardContentTrending2} />
              </div>
            </div>
          </div>}
        </LazyLoad>
      </Element>

      <LazyLoad>
        {
          <div className="container-xxl py-5">
            <div className="row bgColorFoundation py-4">
              <div className="col-lg-7 col-12 d-flex align-items-center">
                <div className='w-100'>
                <h2 className='text-center primary-color-text mb-4'>Still Confused ?</h2>
                <h3 className='text-center  mb-4'>"Not sure what to do ?"</h3>
                <h4 className='text-center mb-4'>Don't worry. You're at right place.</h4>
                <h5 className='text-center text-primary'>Feel free to Contact Us </h5>
                <span className='d-flex justify-content-center fs-6 mt-sm-5 mt-4'><MoreButton text="Contact Us" navigateTo="contact"/></span>
                </div>
              </div>
              <div className="col-lg-5 col-12 d-flex align-items-center justify-content-lg-end justify-content-center pe-lg-4 mt-5 mt-lg-0">
                <FreeDemoForm title="Request for Callback" isCourse={false}/>
              </div>
            </div>
          </div>
        }
      </LazyLoad>

      <LazyLoad><Footer /></LazyLoad>

    </div>
  )
}

export default Courses