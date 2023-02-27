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
import courseImgFoundation1 from '../Assets/course-2.jpg'
import courseImgFoundation2 from '../Assets/course-3.jpg'
import { FaGraduationCap, FaGlobe } from "react-icons/fa";
import { Element } from 'react-scroll';
import FreeDemoForm from '../Common/FreeDemoForm'
import MoreButton from '../Common/MoreButton'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Courses = () => {

  const headingContainerContent = {
    topic: "Courses",
    socialVisible: false,
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

  const cardContentFoundation1 = {
    img: courseImgFoundation1,
    courseName: "Web Development Foundation 1",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    time: "2 Month",
    icon: <FaGlobe />,
    bgColor: "bgColorFoundation",
    
  }
  const cardContentFoundation2 = {
    img: courseImgFoundation2,
    courseName: "Web Development Foundation 2",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    time: "2 Month",
    icon: <FaGraduationCap />,
    bgColor: "bgColorFoundation"
  }
  const cardContentProfessional1 = {
    img: courseImgFoundation2,
    courseName: "Web Development Professional 1",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    time: "2 Month",
    icon: <FaGraduationCap />,
    bgColor: "bgColorProfessional"
  }
  const cardContentProfessional2 = {
    img: courseImgFoundation2,
    courseName: "Web Development Professional 2",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    time: "2 Month",
    icon: <FaGraduationCap />,
    bgColor: "bgColorProfessional"
  }
  const cardContentFramework1 = {
    img: courseImgFoundation2,
    courseName: "Web Development Framework 1",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    time: "2 Month",
    icon: <FaGraduationCap />,
    bgColor: "bgColorFramework"
  }
  const cardContentFramework2 = {
    img: courseImgFoundation2,
    courseName: "Web Development Framework 2",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    time: "2 Month",
    icon: <FaGraduationCap />,
    bgColor: "bgColorFramework"
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const responsive = {
    0: { 
        items: 1
    },
    576: { 
        items: 1
    },
    768: { 
      items: 2
  },
    992: {
        items: 3, 
        itemsFit: 'contain'
    },
};

  const category1 = [
    <CourseCard cardContent={cardContentFoundation1} />,
    <CourseCard cardContent={cardContentFoundation2} />,
    <CourseCard cardContent={cardContentFoundation1} />,
    <CourseCard cardContent={cardContentFoundation2} />
  ];
  const category2 = [
    <CourseCard cardContent={cardContentProfessional1} />,
    <CourseCard cardContent={cardContentProfessional2} />,
    <CourseCard cardContent={cardContentProfessional1} />,
  ]
  const category3 = [
    <CourseCard cardContent={cardContentFramework1} />,
    <CourseCard cardContent={cardContentFramework2} />,
  ]
  

  return (
    <div>
      <HeadingWallpaper img={img} heading="Courses" headLink="Courses" />
      <HeadingContainer headingContainerContent={headingContainerContent} />

      <LazyLoad ><CoursesCategory /></LazyLoad>

      <Element name="foundation">
        <LazyLoad >
          {<div className="container-xxl py-5" >
            <div className="container">
              <HeadingTitle title="Foundation" mainTitle="Foundational Courses" />
              <div className="row g-4 justify-content-center">
                <AliceCarousel items={category1} autoPlay autoPlayInterval={3000} responsive={responsive} />
              </div>
            </div>
          </div>}</LazyLoad>
      </Element>

      <Element name="professional">
        <LazyLoad >
          {<div className="container-xxl py-5">
            <div className="container">
              <HeadingTitle title="Professional" mainTitle="Professional Courses" />
              <div className="row g-4 justify-content-center">
                <AliceCarousel items={category2} autoPlay autoPlayInterval={3000} responsive={responsive} />
              </div>
            </div>
          </div>}
        </LazyLoad>
      </Element>

      <Element name="framework">
        <LazyLoad >
          {<div className="container-xxl py-5">
            <div className="container">
              <HeadingTitle title="Framework" mainTitle="Framework Courses" />
              <div className="row g-4 justify-content-center">
              <AliceCarousel items={category3} autoPlay autoPlayInterval={3000} responsive={responsive} />
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