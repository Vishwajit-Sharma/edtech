import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import HeadingWallpaper from '../Common/HeadingWallpaper';
import wp1 from '../Assets/wp1.jpg'
import wp2 from '../Assets/wp2.jpg'
import wp3 from '../Assets/wp3.jpg'
import wp4 from '../Assets/wp4.jpg'
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
 else if(course === "react js"){
  img= wp3
 }
 else if(course === "advanced javascript"){
  img= wp4
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
    subTopic: "React JS",
    socialVisible: false,
    readMoreVisible: false,
    para1: "React is a popular JavaScript library for building user interfaces. It was developed by Facebook and is widely used by developers to create web applications. React is based on a component-based architecture, which allows developers to create reusable UI components and build complex user interfaces more easily.",
    //para2: "React provides many benefits for developing large-scale web applications, including improved performance, modular code, and easier maintenance. It is also highly customizable, allowing developers to use a variety of libraries and tools to enhance the development process.",
    bulletPoints1: "ES6 Concepts",
    bulletPoints2: "Components & JSX",
    bulletPoints3: "Using Hooks",
    bulletPoints4: "React Router Dom",
    bulletPoints5: "Axios/Fetch for API's",
    bulletPoints6: "State management with Redux",
    para3: "React has become a popular choice for web development due to its ease of use, powerful features, and ability to create complex user interfaces with ease. Whether you're building a simple website or a complex web application, React is a great choice for your development needs.",
    img: img,
    btn: true, 
    navigateTo: `/courses/${course}/join`,
    anim: <Player autoplay loop speed="1.5" src="https://assets9.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json" style={{ height: '600px', width: '650px' }}/>
  }
  const javascriptOverview = {
    topic: "Course Overview",
    subTopic: "Advanced Javascript",
    socialVisible: false,
    readMoreVisible: false,
    para1: "The Advanced JavaScript course is designed to take your programming skills to the next level. You will learn advanced concepts of JavaScript such as functional programming, closures, async/await, and more. The course will also cover best practices for writing clean and efficient code.",
    para3: "By the end of the course, you will have a deeper understanding of JavaScript and be able to write more efficient and powerful code.",
    bulletPoints1: "Functional Programming",
    bulletPoints2: "Closures",
    bulletPoints3: "Asynchronous JavaScript",
    bulletPoints4: "Promises and Async/Await",
    bulletPoints5: "Error Handling",
    bulletPoints6: "JS Engine Architecture",
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
    { title: 'Introduction to React', details: ["What is React","React vs. other frameworks","Setting up a development environment","Creating a React component", "JSX & JSX syntax", "How to use CSS"] },
    { title: 'Javascript ES-6 Concepts', details:  ["Let and const","Arrow Function","Template literals","Destructuring", "Spread and rest operators","Promises", "Most commonly used Methods"] },
    { title: 'Props and State', details:  ["Props and their usage","State and its usage","Changing state and props","Conditional rendering", "Handling events"] },
    { title: 'Component Lifecycle & Intro to Hooks', details: ["Class vs Functional Components","Component lifecycle methods","useState Hook","useEffect Hook", "Using lifecycle methods with useEffect Hook"] },
    { title: 'Forms and Input', details:  ["Controlled and uncontrolled components","Handling form data","Validating input","Using third-party form libraries"] },
    { title: 'Start with Project', details:  ["Project Selection","Things to do", "Learning Outcome", "Review"] },
  ];
  const reactL2 = [
    { title: 'Routing with React-router-dom', details:  ["Setting up routes","Route parameters","Nested routes","Creating a Nav Bar based on routing",] },
    { title: 'Most Commonly Used Libraries', details:  ["React-icons","React-toastify","React-modals","React-bootstrap/material-UI"] },
    { title: 'Forms Management with Formik', details:  ["Setting up Formik","Handling form data","Validation with Yup","Customizing forms"] },
    { title: 'Working with APIs', details:  ["Using Axios & Fetch","Making API calls","Async and await","Handling responses", "Error handling"] },
    { title: 'Context API', details:  ["Prop drilling","State Management","Create Context","Provide Context", "Consume Context","useContext Hook"] },
    { title: 'Performance Optimization', details:  ["Pure component","Reducing unnecessary re-renders","Memoization with React.memo ","Memoization with useMemo and useCallback hooks", "Implementing lazy loading and code splitting"] },
    { title: 'Advanced React concepts', details:  ["Higher-order components","State Lifting","React reconciliation process","React-Query", "Error boundaries"] },
    { title: 'State Management with Redux', details:  ["Redux architecture","Redux basics and concepts","Setting up Redux","Redux-toolkit & implementation"] },
    { title: 'Start with Building a production-ready app Project', details:  ["App Selection","Things to do", "Learning Outcome", "Review-1", "Review-2", "Review-3"] },
  ];
  const javascriptL1 = [
    { title: 'Introduction to JavaScript', details: ["Hello, world!","Variables & Data types","Interaction: alert, prompt, confirm","Basic operators and expressions", "Comparisons"] },
    { title: 'Javascript Fundamentals', details:  ["Control structures","Functions","Objects","Callbacks"] },
    { title: 'Array & string Methods', details:  ["Array methods","String methods"] },
    { title: 'Document Object Model (DOM) Basics', details: ["Introduction to the DOM","Accessing and modifying elements","Creating and deleting elements","Handling events", "Styling elements", "Traversing the DOM"] },
    { title: 'Start with Project', details:  ["Project Selection","Things to do", "Learning Outcome", "Review"] },
  ];
  const javascriptL2 = [
    { title: 'Modern Javascript', details:  ["ES6 syntax and features","Promises and async/await","Destructuring","Arrow Functions","Template literals", "Spread and Rest operators"] },
    { title: 'Deep Dive into Javascript', details:  ["Hoisting","Closures","Scope chain","This keyword","Call/apply/bind", "Scheduling: setTimeout and setInterval", "Prototypal inheritance","Error handling - try...catch"] },
    { title: 'Asynchronous Programming in JavaScript', details:  ["Definition of asynchronous programming","Callback functions and their use in handling asynchronous code","JavaScript Event Loop","Call stack & Task queue", "Promises & Promises chaining","Async/await"] },
    { title: 'Introduction to Events', details:  ["Introduction to browser events","Event delegation","Bubbling and capturing","Mouse events", "Form events"] },
    { title: 'Storing data in the browser', details:  ["Cookies,","Local Storage","Session Storage"] },
    { title: 'Start with Building a Project', details:  ["Project Selection","Things to do", "Learning Outcome", "Review-1", "Review-2", "Review-3"] },
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
    `We provide Career assistance in terms of Resume building, Mock interviews, 1:1 mentorship etc.`,

  ]
  const whyReact = [
    `React is one of the most popular front-end libraries in use today, and learning it can greatly enhance your career prospects.`,
    `Our React course offers comprehensive coverage of all the essential React concepts and features, including hooks, context, and performance optimization.`,
    `Our course is designed to be beginner-friendly, with hands-on exercises and practical examples to help you gain a solid understanding of React.`,
    `We offer a flexible learning environment, with self-paced learning options and access to experienced instructors who can provide support and guidance as needed.`,
    `Our course includes real-world projects and case studies, allowing you to apply your React skills in practical settings and build a portfolio of work to showcase to potential employers.`,
    `We cover advanced React concepts and optimization techniques, including lazy loading, code splitting, and server-side rendering, to help you create high-performing applications.`,
    `Our course offers a comprehensive overview of the React ecosystem, including popular tools and libraries like Redux, React Router, and material-ui.`,
    `Our instructors are experienced React developers who have worked on a wide range of React projects, and can provide valuable insights and guidance to help you become a proficient React developer.`,
    `Our course is constantly updated to reflect the latest changes and updates to the React library, ensuring that you have access to the most up-to-date information and techniques.`,
    `We provide opportunities for networking and collaboration with other students, giving you a chance to learn from your peers and develop your teamwork skills.`,
    `In this Course, you'll get complete hands-on exposure through 3 Mini projects and 1 Mega Project.`,
    `We provide Career assistance in terms of Resume building, Mock interviews, 1:1 mentorship etc.`,

  ]
  const whyJavascript = [
    `JavaScript is the most widely used programming language for web development, making it a valuable skill to have in today's job market.`,
    `Advanced JavaScript concepts such as functional programming and closures are becoming more commonly used in modern web development.`,
    `Knowing advanced JavaScript will make you stand out from other web developers and give you a competitive edge in the job market.`,
    `Learning advanced JavaScript will help you better understand and utilize JavaScript libraries and frameworks such as React and Angular.`,
    `Advanced JavaScript skills can help you solve complex programming problems and make you a more versatile developer.`,
    `Our course will provide hands-on coding exercises and real-world examples to help you solidify your understanding of advanced JavaScript concepts.`,
    `You will have access to personalized feedback and support from experienced instructors throughout the course.`,
    `Our course is designed to be beginner-friendly, with clear explanations of advanced concepts and practical examples to help you apply what you learn.`,
    `We provide personalized career guidance to help you apply your advanced JavaScript skills in the job market and succeed as a web developer.`,
    `We provide opportunities for networking and collaboration with other students, giving you a chance to learn from your peers and develop your teamwork skills.`,
    `In this Course, you'll get complete hands-on exposure through 3 Mini projects and 1 Mega Project.`,
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
        {course === "react js" && <LazyLoad><WhyThisCourse course={courseCapitalise} why={whyReact}/>  </LazyLoad>}
        {course === "advanced javascript" && <LazyLoad><WhyThisCourse course={courseCapitalise} why={whyJavascript}/>  </LazyLoad>}

    {/* {course === "react js" && <LazyLoad><FAQ faqs={faqReact}/></LazyLoad>} */}
    <LazyLoad><Footer/></LazyLoad>

    </div>
  )
}

export default ShowCourse