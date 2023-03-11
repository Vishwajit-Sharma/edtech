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
import { Player } from '@lottiefiles/react-lottie-player';
 
const ShowCourse = () => {

  const { course } = useParams();

  const courseCapitalise = course.replace(/(^|\s)\S/g, (match) => match.toUpperCase());

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
    btn: true, 
    navigateTo: `/courses/${course}/join`,
    anim: <Player autoplay loop speed="1" src="https://assets8.lottiefiles.com/packages/lf20_jd8ofsrz.json" style={{ height: '500px', width: '550px' }}/>
  }

  const pythonOverview = {
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
    navigateTo: `/courses/${course}/join`,
    anim: <Player autoplay loop speed="1.5" src="https://assets10.lottiefiles.com/packages/lf20_2znxgjyt.json" style={{ height: '500px', width: '550px' }}/>
  }
  const frontEndOverview = {
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
    navigateTo: `/courses/${course}/join`,
    anim: <Player autoplay loop speed="2" src="https://assets6.lottiefiles.com/private_files/lf30_obidsi0t.json" style={{ height: '500px', width: '550px' }}/>
  }
  const backEndOverview = {
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
    navigateTo: `/courses/${course}/join`,
    anim: <Player autoplay loop speed="1" src="https://assets6.lottiefiles.com/private_files/lf30_wqypnpu5.json" style={{ height: '500px', width: '550px' }}/>
  }
  const reactOverview = {
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
    btn: true, 
    navigateTo: `/courses/${course}/join`,
    anim: <Player autoplay loop speed="1.5" src="https://assets9.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json" style={{ height: '600px', width: '650px' }}/>
  }
  const javascriptOverview = {
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
    navigateTo: `/courses/${course}/join`,
    anim: <Player autoplay loop speed="1" src="https://assets3.lottiefiles.com/packages/lf20_s7p6xmHfio.json" style={{ height: '600px', width: '600px' }}/>
  }
  const javaOverview = {
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
    navigateTo: `/courses/${course}/join`,
    anim: <Player autoplay loop speed="2" src="https://assets2.lottiefiles.com/packages/lf20_zh6xtlj9.json" style={{ height: '500px', width: '550px' }}/>
  }

  const duration = {
    webDesign: "8-9 weeks / 8-9 weekends",
    python: "8-9 weeks / 8-9 weekends",
    frontEnd: "8-9 weeks / 8-9 weekends",
    backEnd: "8-9 weeks / 8-9 weekends",
    react: "8-9 weeks / 8-9 weekends",
    javascript: "8-9 weeks / 8-9 weekends",
    java: "8-9 weeks / 8-9 weekends",
  }
  const preRequisites = {
    webDesign: ["There is no such Prerequisites for this course.", "Basic computer knowledge will be advantage."],
    python: ["There is no such Prerequisites for this course.", "Basic computer knowledge will be advantage."],
    frontEnd: ["There is no such Prerequisites for this course.", "Basic computer knowledge will be advantage."],
    backEnd: ["There is no such Prerequisites for this course.", "Basic computer knowledge will be advantage."],
    react: ["There is no such Prerequisites for this course.", "Basic computer knowledge will be advantage."],
    javascript: ["There is no such Prerequisites for this course.", "Basic computer knowledge will be advantage."],
    java: ["There is no such Prerequisites for this course.", "Basic computer knowledge will be advantage."],
  }
  const included = {
    webDesign: ["3 Mini Projects", "1 Major Project"],
    python: ["3 Mini Projects", "1 Major Project"],
    frontEnd: ["3 Mini Projects", "1 Major Project"],
    backEnd: ["3 Mini Projects", "1 Major Project"],
    react: ["3 Mini Projects", "1 Major Project"],
    javascript: ["3 Mini Projects", "1 Major Project"],
    java: ["3 Mini Projects", "1 Major Project"],
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
  const pythonL1 = [
    { title: 'Introduction to Web Design', details: ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to HTML4 and HTML5', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to CSS and CSS3', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to JavaScript', details: ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
  ];
  const pythonL2 = [
    { title: 'Introduction to Advanced JavaScript', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to jQuery', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to AJAX', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to Bootstrap', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] }
  ];
  const frontEndL1 = [
    { title: 'Introduction to Web Design', details: ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to HTML4 and HTML5', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to CSS and CSS3', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to JavaScript', details: ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
  ];
  const frontEndL2 = [
    { title: 'Introduction to Advanced JavaScript', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to jQuery', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to AJAX', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to Bootstrap', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] }
  ];
  const backtEndL1 = [
    { title: 'Introduction to Web Design', details: ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to HTML4 and HTML5', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to CSS and CSS3', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to JavaScript', details: ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
  ];
  const backtEndL2 = [
    { title: 'Introduction to Advanced JavaScript', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to jQuery', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to AJAX', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to Bootstrap', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] }
  ];
  const reactL1 = [
    { title: 'Introduction to Web Design', details: ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to HTML4 and HTML5', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to CSS and CSS3', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to JavaScript', details: ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
  ];
  const reactL2 = [
    { title: 'Introduction to Advanced JavaScript', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to jQuery', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to AJAX', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to Bootstrap', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] }
  ];
  const javascriptL1 = [
    { title: 'Introduction to Web Design', details: ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to HTML4 and HTML5', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to CSS and CSS3', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to JavaScript', details: ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
  ];
  const javascriptL2 = [
    { title: 'Introduction to Advanced JavaScript', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to jQuery', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to AJAX', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to Bootstrap', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] }
  ];
  const javaL1 = [
    { title: 'Introduction to Web Design', details: ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to HTML4 and HTML5', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to CSS and CSS3', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to JavaScript', details: ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
  ];
  const javaL2 = [
    { title: 'Introduction to Advanced JavaScript', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to jQuery', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to AJAX', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] },
    { title: 'Introduction to Bootstrap', details:  ["Introduction","Browser Details","hTML5","css3/5", "Welcome to the world"] }
  ];

  const faqReact = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'What are the key features of React?',
      answer: 'React allows developers to create reusable UI components and provides a virtual DOM for fast rendering.',
    },
    {
      question: 'What are the advantages of using React?',
      answer: 'React provides high performance, easy maintenance, and great developer experience.',
    },
    {
      question: 'How can I get started with React?',
      answer: 'You can get started with React by learning the basics of HTML, CSS, and JavaScript, and then following some React tutorials and building small projects.',
    },
  ]


  return (
    <div>
      <HeadingWallpaper img={img} heading={courseCapitalise} headLink={courseCapitalise} isCourses={true} />

      {course === "web designing" && <HeadingContainer headingContainerContent={webDesigningOverview} />}
      {course === "python with machine learning" && <HeadingContainer headingContainerContent={pythonOverview} />}
      {course === "front end development" && <HeadingContainer headingContainerContent={frontEndOverview} />}
      {course === "back end development" && <HeadingContainer headingContainerContent={backEndOverview} />}
      {course === "react js" && <HeadingContainer headingContainerContent={reactOverview} />}
      {course === "advanced javascript" && <HeadingContainer headingContainerContent={javascriptOverview} />}
      {course === "java" && <HeadingContainer headingContainerContent={javaOverview} />}
      

      <HeadingTitle title="Course Description" mainTitle="Course Outline" />
      
      {course === "web designing" && <LazyLoad><CourseOutline  duration = {duration.webDesign} preRequisites = {preRequisites.webDesign} included={included.webDesign} course={courseCapitalise}/></LazyLoad>}
      {course === "python with machine learning" && <LazyLoad><CourseOutline  duration = {duration.python} preRequisites = {preRequisites.python} included={included.python} course={courseCapitalise}/></LazyLoad>}
      {course === "front end development" && <LazyLoad><CourseOutline  duration = {duration.frontEnd} preRequisites = {preRequisites.frontEnd} included={included.frontEnd} course={courseCapitalise}/></LazyLoad>}
      {course === "back end development" && <LazyLoad><CourseOutline  duration = {duration.backEnd} preRequisites = {preRequisites.backEnd} included={included.backEnd} course={courseCapitalise}/></LazyLoad>}
      {course === "react js" && <LazyLoad><CourseOutline  duration = {duration.react} preRequisites = {preRequisites.react} included={included.react} course={courseCapitalise}/></LazyLoad>}
      {course === "advanced javascript" && <LazyLoad><CourseOutline  duration = {duration.javascript} preRequisites = {preRequisites.javascript} included={included.javascript} course={courseCapitalise}/></LazyLoad>}
      {course === "java" && <LazyLoad><CourseOutline  duration = {duration.java} preRequisites = {preRequisites.java} included={included.java} course={courseCapitalise}/></LazyLoad>}
      
      <LazyLoad><HeadingTitle title="Course Curriculum" mainTitle="Course Content" /></LazyLoad>

      {course === "web designing" && <LazyLoad><CourseContent courseContentL1={webDesignL1} courseContentL2={webDesignL2}/></LazyLoad>}
      {course === "python with machine learning" && <LazyLoad><CourseContent courseContentL1={pythonL1} courseContentL2={pythonL2}/></LazyLoad>}
      {course === "front end development" && <LazyLoad><CourseContent courseContentL1={frontEndL1} courseContentL2={frontEndL2}/></LazyLoad>}
      {course === "back end development" && <LazyLoad><CourseContent courseContentL1={backtEndL1} courseContentL2={backtEndL2}/></LazyLoad>}
      {course === "react js" && <LazyLoad><CourseContent courseContentL1={reactL1} courseContentL2={reactL2}/></LazyLoad>}
      {course === "advanced javascript" && <LazyLoad><CourseContent courseContentL1={javascriptL1} courseContentL2={javascriptL2}/></LazyLoad>}
      {course === "java" && <LazyLoad><CourseContent courseContentL1={javaL1} courseContentL2={javaL2}/></LazyLoad>}

      <LazyLoad><Process />
        <div className="container-xxl ">
          <div className="container d-flex justify-content-center pb-4">
            <MoreButton text="Join Now"  navigateTo={`courses/${course}/join`}/>
          </div>
        </div>
      </LazyLoad>
      

    {course === "react js" && <LazyLoad><FAQ faqs={faqReact}/></LazyLoad>}
    <LazyLoad><Footer/></LazyLoad>

    </div>
  )
}

export default ShowCourse