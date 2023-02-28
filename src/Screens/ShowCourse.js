import React from 'react'
import { useParams } from 'react-router-dom';
import HeadingWallpaper from '../Common/HeadingWallpaper';
import img from '../Assets/carousel-1.jpg'
import HeadingTitle from '../Common/HeadingTitle';
import HeadingContainer from '../Common/HeadingContainer';
import LazyLoad from 'react-lazyload';
import Process from '../Components/Process'


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
    img: img
  }

  const duration = {
    webDesign: "8-9 weeks / 8-9 weekends",
  }
  const preRequisites = {
    webDesign: ["There is no such Prerequisites for this course.", "Basic computer knowledge will be advantage."],
  }

  return (
    <div>
      <HeadingWallpaper img={img} heading={course} headLink={course} isCourses={true} />

      {course === "web development 1" && <HeadingContainer headingContainerContent={webDesigningOverview} />}

      <HeadingTitle title="Course Description" mainTitle="Course Outline" />
      <div className="row g-4 m-0 px-5">
        <div className="col-md-6  mt-1 outline-left">
          {course === "web development 1" &&  <div>
            <p><span>Duration : </span> <span className=''>&nbsp;{duration.webDesign}</span></p>
            <div className='d-flex'>
              <span>Pre-requisites: </span>
              <ul>
                {preRequisites.webDesign.map(item => <li>&nbsp;{item}</li>)}
              </ul>
            </div>
          </div>}

        </div>
        
        <div className="col-md-6 mt-1 outline-right">
         {course === "web development 1" && <div>
         <p> INCLUSION </p>
         </div>}
        </div>
      </div>

      <LazyLoad><Process /></LazyLoad>

      <h1>{course}</h1>

    </div>
  )
}

export default ShowCourse