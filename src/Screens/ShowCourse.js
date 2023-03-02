import React from 'react'
import { useParams } from 'react-router-dom';
import HeadingWallpaper from '../Common/HeadingWallpaper';
import img from '../Assets/carousel-1.jpg'
import HeadingTitle from '../Common/HeadingTitle';
import HeadingContainer from '../Common/HeadingContainer';
import LazyLoad from 'react-lazyload';
import Process from '../Components/Process'
import CourseOutline from '../Components/CourseOutline';
import CourseContent from '../Components/CourseContent';
import FAQ from '../Components/FAQ';
import Footer from '../Components/Footer';
import MoreButton from '../Common/MoreButton';


const ShowCourse = () => {

  const { course } = useParams();

  // const courseNames= ["web development 1", "front end development", "back end development", "react"]

  const webDesigningOverview = {
    topic: "Course Overview",
    subTopic: "The Best Course Available",
    socialVisible: false,
    readMoreVisible: false,
    para1: "Are you creative? Think out of the box? The web designing course is a very exciting career option for you. Our Web designing classes consists of HTML/HTML5, CSS/CSS3, JavaScript, jQuery, BootStrap these are used to organize the website layout and define the look and feel of WebPages, and we teach all these using Dreamweaver, which is a most popular professional web Development tool. Our special design course covers the latest designing tools like Adobe Photoshop and flash. We also cover real-time projects starting from domain registration to hosting your website.",
    para2: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
    bulletPoints1: "Skilled Instructors",
    bulletPoints2: "Skilled Instructors",
    bulletPoints3: "Skilled Instructors",
    bulletPoints4: "Skilled Instructors",
    bulletPoints5: "Skilled Instructors",
    bulletPoints6: "Skilled Instructors",
    img: img,
    btn: "Join Now", 
    navigateTo: "/contact"
  }

  const duration = {
    webDesign: "8-9 weeks / 8-9 weekends",
  }
  const preRequisites = {
    webDesign: ["There is no such Prerequisites for this course.", "Basic computer knowledge will be advantage."],
  }
  const included = {
    webDesign: ["3 Mini Projects", "1 Major Project"]
  }
  const webDesignL1 = [
    { title: 'Introduction to Web Design', details: ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to HTML4 and HTML5', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to CSS and CSS3', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to JavaScript', details: ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
  ];
  const webDesignL2 = [
    { title: 'Introduction to Advanced JavaScript', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to jQuery', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to AJAX', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to Bootstrap', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] }
  ];

  return (
    <div>
      <HeadingWallpaper img={img} heading={course} headLink={course} isCourses={true} />

      {course === "web development 1" && <HeadingContainer headingContainerContent={webDesigningOverview} />}

      <HeadingTitle title="Course Description" mainTitle="Course Outline" />
      
      {course === "web development 1" && <LazyLoad><CourseOutline  duration = {duration.webDesign} preRequisites = {preRequisites.webDesign} included={included.webDesign}/></LazyLoad>}
      
      <LazyLoad><HeadingTitle title="Course Curriculum" mainTitle="Course Content" /></LazyLoad>

      {course === "web development 1" && <LazyLoad><CourseContent courseContentL1={webDesignL1} courseContentL2={webDesignL2}/></LazyLoad>}

      <LazyLoad><Process />
        <div className="container-xxl ">
          <div className="container d-flex justify-content-center">
            <MoreButton text="Join Now"  navigateTo={`courses/${course}/join`}/>
          </div>
        </div>
      </LazyLoad>

    <LazyLoad><FAQ/></LazyLoad>
    <LazyLoad><Footer/></LazyLoad>

    </div>
  )
}

export default ShowCourse