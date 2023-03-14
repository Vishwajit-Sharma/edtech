import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import HeadingWallpaper from '../Common/HeadingWallpaper';
import wp1 from '../Assets/wp1.jpg'
import wp2 from '../Assets/wp2.jpg'
import HeadingTitle from '../Common/HeadingTitle';
import HeadingContainer from '../Common/HeadingContainer';
import LazyLoad from 'react-lazyload';
import Process from '../Components/Process'
import CourseOutline from '../Components/CourseOutline';
import CourseContent from '../Components/CourseContent';
//import FAQ from '../Components/FAQ';
import Footer from '../Components/Footer';
import MoreButton from '../Common/MoreButton';
import WhyThisCourse from '../Components/WhyThisCourse';
import { Player } from '@lottiefiles/react-lottie-player';
 
const ShowCourse = () => {

  const { course } = useParams();

  const courseCapitalise = course.replace(/(^|\s)\S/g, (match) => match.toUpperCase());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let img;
 if(course === "web designing"){
  img = wp1
 } else if(course === "python with machine learning"){
  img= wp2
 }

  const webDesigningOverview = {
    topic: "Course Overview",
    subTopic: "Web Designing",
    socialVisible: false,
    readMoreVisible: false,
    para1: "In this web designing course, you'll learn the essential skills and techniques needed to create beautiful, responsive and user-friendly websites. You'll gain a deep understanding of web design principles and learn how to use popular design tools to bring your ideas to life. ",
    para2: "By the end of the course, you'll have a solid foundation in web design and be able to create professional websites that are both aesthetically pleasing and functional.",
    bulletPoints1: "HTML, CSS, JavaScript",
    bulletPoints2: "Responsive Design",
    bulletPoints3: "Color & Typography",
    bulletPoints4: "Portfolio Development",
    bulletPoints5: "Layout Design",
    bulletPoints6: "Web Performance Optimization",
    img: img,
    btn: true, 
    navigateTo: `/courses/${course}/join`,
    anim: <Player autoplay loop speed="1" src="https://assets8.lottiefiles.com/packages/lf20_jd8ofsrz.json" style={{ height: '500px', width: '550px' }}/>
  }

  const pythonOverview = {
    topic: "Course Overview",
    subTopic: "Python With Machine Learning",
    socialVisible: false,
    readMoreVisible: false,
    para1: "Python has become the preferred programming language for Machine Learning (ML) and Artificial Intelligence (AI) applications. It is a versatile language that offers a wide range of libraries and tools for data manipulation, visualization, and modeling.",
    para2: "Python with machine learning course is designed to help learners understand the fundamentals of Python programming language and its use in machine learning algorithms.",
    bulletPoints1: "Python syntax and basics",
    bulletPoints2: "Overview of machine learning",
    bulletPoints3: "Data preprocessing and cleaning",
    bulletPoints4: "Building and evaluating models",
    bulletPoints5: "Practical industry applications",
    bulletPoints6: "Hands-on coding exercises",
    para3: "If you are interested in learning ML and AI, Python is definitely the way to go.",
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
    webDesign: ["There is no such Prerequisites for this course.", "Basic computer knowledge will be advantage.", "Obviously, PC or Laptop must be there"],
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
    { title: 'Introduction to Web Design', details: ["Project Overview","A Website Postmortem","Building Blocks of a Website"] },
    { title: 'Introduction to HTML-4', details:  ["HTML Basic","HTML Links","HTML Lists","HTML Tables", "HTML Forms"] },
    { title: 'Introduction to HTML-5', details:  ["Introduction of HTML5","New Semantic Tags","HTML Audio/Video"] },
    { title: 'Introduction to CSS', details:  ["CSS Basics","Color, Text, Spacing Properties","Inline and Block Elements","Box Model", "Positioning"] },
    { title: 'Start with Project', details:  ["Design Selection","Things to do", "Learning Outcome", "Review"] },
  ];
  const webDesignL2 = [
    { title: 'CSS Flexbox & Grid', details:  ["Flex properties","Grid Properties"] },
    { title: 'Advanced CSS (CSS-3)', details:  ["Backgrounds","Gradients","Shadow","Animations"] },
    { title: 'CSS Media Queries', details:  ["What & Why Media Queries","Breakpoints","How to Use it"] },
    { title: 'Introduction to JavaScript', details: ["Javascript Intro","Datatypes & Operators","Conditional Statements and Loops","Functions"] },
    { title: 'Javascript - One Step More', details:  ["Javascript Dates","DOM Manipulation","Form Events","Mouse Events", "Javascript Validation"] },
    { title: 'Start with a Mega Project', details:  ["Theme Selection","Things to do", "Learning Outcome", "Review-1", "Review-2", "Review-3"] },
  ];
  const pythonL1 = [
    { title: 'Python Introduction', details: ["Project Overview","Software Installation","Python Usage & Applications"] },
    { title: 'Python Basic Programming Concepts', details:  ["Variables & their Types","Operators","String & Boolean Operations","Control Flow"] },
    { title: 'Python Functions', details:  ["Defining & Calling Functions","Parameters & Arguments","Returning Values from Functions","Lambda Functions"] },
    { title: 'Data Structures', details: ["Lists & List Operations","Tuples & Tuple Operations","Sets & Set Operations","Dictionaries & Dictionary Operations"] },
    { title: 'Machine Learning Introduction', details: ["Machine Learning","Today's World with Machine Learning","Applications of Machine Learning", "Python Libraries for Machine Learning"] },
    { title: 'Start with Project', details:  ["Project Selection","Things to do", "Learning Outcome", "Review"] },
  ];
  const pythonL2 = [
    { title: 'Object Oriented Programming with Python', details:  ["Classes & objects","Inheritance","Polymorphism","Encapsulation", "Abstraction"] },
    { title: 'Exceptions & Error Handling in Python', details:  ["Catching Exceptions","Handling Exceptions","Raising Exceptions"] },
    { title: 'Advanced Python', details:  ["File Handling","Regular Expressions","Multithreading","Database Handling"] },
    { title: 'Data Pre-Processing', details:  ["Data Cleaning","Data Integration","Data Transformation","Data Reduction"] },
    { title: 'Regression', details:  ["Linear Regression","Polynomial Regression","Multiple Regression","Logistic Regression"] },
    { title: 'Classification', details:  ["K-Nearest Neighbours(KNN)","Decision Trees","Naive Bayes","Random Forests"] },
    { title: 'Clustering', details:  ["K-Means Clustering","Hierarchical Clustering","Density-Based Clustering","Expectation-Maximization(EM) Clustering"] },
    { title: 'Start with a Mega Project', details:  ["Theme Selection","Things to do", "Learning Outcome", "Review-1", "Review-2", "Review-3"] },
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
  const whyWebDesign = [
    `Web design is a high-demand skill in today's digital world, with businesses of all sizes needing well-designed websites to establish an online presence.`,
    `With a strong foundation in web design principles, you can create beautiful, functional websites that are user-friendly and easy to navigate.`,
    `A web designing course can help you develop the skills you need to become a professional web designer or freelancer.`,
    `Our web designing course can teach you how to create responsive websites that work well on all devices, including desktops, tablets, and smartphones.`,
    `You can develop a portfolio of work through a web designing course, which can help you showcase your skills and attract potential clients or employers.`,
    `By mastering web design principles, you can create websites that are both aesthetically pleasing and functional, resulting in a better user experience for your audience.`,
    `We offer personalized feedback and support from experienced instructors, helping you improve your skills and develop your own design style.`,
    `Our course includes real-world projects and assignments, allowing you to apply your skills to practical scenarios and build a professional portfolio.`,
    `We emphasize the importance of good design principles, such as visual hierarchy and color theory, helping you create websites that are both aesthetically pleasing and functional.`,
    `In this Course, you'll get complete hands-on exposure through 3 Mini projects and 1 Mega Project.`,
    `We'll assist you in website hosting after Project Completion.`,
    `We provide back up classes, in case you miss any classes.`,
    `We provide Career assistance in terms of Resume building, Mock interviews, 1:1 mentorship etc.`,

  ]
  const whyPython = [
    `Python has a simple and easy-to-read syntax, which makes it easy to learn even for beginners.`,
    `Python has a large and supportive community of developers and users who contribute to the development of various libraries and tools. This means that you can easily find solutions to your problems and get help when you need it.`,
    `Python has numerous libraries and tools for ML, such as NumPy, Pandas, Matplotlib, Scikit-Learn, TensorFlow, and PyTorch. These libraries provide powerful functionalities for data manipulation, visualization, and modeling.`,
    `Python is a versatile language that can be used for a wide range of applications, from web development to data science and machine learning.`,
    `Our instructors are experienced professionals who have real-world experience in ML and AI applications. They will provide you with practical knowledge and skills that you can apply to real-world problems.`,
    `Our course is designed to provide you with hands-on experience in using Python libraries and tools for ML. You will work on real-world projects that will help you build your portfolio and enhance your skills.`,
    `We offer a customized curriculum that is tailored to your specific needs and goals. Whether you are a beginner or an advanced learner, we have a course that will suit your needs.`,
    `Our platform provides a supportive learning environment where you can ask questions, get feedback, and interact with other learners. We are committed to your success and will provide you with the resources and support you need to achieve your goals.`,
    `We offer personalized feedback and support from experienced instructors, helping you improve your skills and develop your own style.`,
    `We provide opportunities for networking and collaboration with other students, giving you a chance to learn from your peers and develop your teamwork skills.`,
    `In this Course, you'll get complete hands-on exposure through 3 Mini projects and 1 Mega Project.`,
    `We'll assist you in website hosting after Project Completion.`,
    `We provide back up classes, in case you miss any classes.`,
    `We provide Career assistance in terms of Resume building, Mock interviews, 1:1 mentorship etc.`,

  ]

  // const faqReact = [
  //   {
  //     question: 'What is React?',
  //     answer: 'React is a JavaScript library for building user interfaces.',
  //   },
  //   {
  //     question: 'What are the key features of React?',
  //     answer: 'React allows developers to create reusable UI components and provides a virtual DOM for fast rendering.',
  //   },
  //   {
  //     question: 'What are the advantages of using React?',
  //     answer: 'React provides high performance, easy maintenance, and great developer experience.',
  //   },
  //   {
  //     question: 'How can I get started with React?',
  //     answer: 'You can get started with React by learning the basics of HTML, CSS, and JavaScript, and then following some React tutorials and building small projects.',
  //   },
  // ]


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

      <LazyLoad><Process />  </LazyLoad>
      
        <LazyLoad><div className="container-xxl ">
          <div className="container d-flex justify-content-center pb-4">
            <MoreButton text="Join Now"  navigateTo={`courses/${course}/join`}/>
          </div>
        </div></LazyLoad>
    
        {course === "web designing" && <LazyLoad><WhyThisCourse course={courseCapitalise} why={whyWebDesign}/>  </LazyLoad>}
        {course === "python with machine learning" && <LazyLoad><WhyThisCourse course={courseCapitalise} why={whyPython}/>  </LazyLoad>}

    {/* {course === "react js" && <LazyLoad><FAQ faqs={faqReact}/></LazyLoad>} */}
    <LazyLoad><Footer/></LazyLoad>

    </div>
  )
}

export default ShowCourse