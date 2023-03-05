import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import MyCarousel from '../Components/MyCarousel'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import PopularCourses from '../Components/PopularCourses'
import HeadingContainer from '../Common/HeadingContainer'
//import Testimonial from '../Components/Testimonial'
import  LazyLoad  from 'react-lazyload';
import headingImage from '../Assets/about.jpg'
import FAQ from '../Components/FAQ'


const Home = () => {
  
  const headingContainerContent = {
    topic: "About Us",
    subTopic: "Welcome to Vishwa EdTech",
    socialVisible: false,
    readMoreVisible: true,
    para1: "Welcome to Vishwa EdTech, a leading software training institute in India that offers comprehensive and industry-relevant courses to help you advance your career.",
    para2: "Our mission is to empower aspiring software professionals with the skills and knowledge they need to succeed in today's fast-paced and competitive job market. Whether you're a fresh graduate or a working professional looking to upskill, we've got the perfect course for you.",
    bulletPoints1: "Industry-relevant curriculum", 
    bulletPoints2: "Experienced faculty",  
    bulletPoints3: "Flexible learning options",  
    bulletPoints4: "Placement Assistance",  
    bulletPoints5: "Affordable pricing",  
    bulletPoints6: "Community Buliding",  
    img: headingImage,
    para3: "Join us today and take the first step towards a successful career in software.",
  }

  const faq = [
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
        <MyCarousel/>

        <HeadingContainer headingContainerContent={headingContainerContent}/>

        <LazyLoad height={200} offset={20}>
        <ServiceCard />
        </LazyLoad>

        <LazyLoad height={200} offset={20}>
        <PopularCourses/>
        </LazyLoad>

        <LazyLoad height={200} offset={20}>
        <Features/>
        </LazyLoad>

        <LazyLoad height={200} offset={20}>
        <FAQ faqs={faq}/>
        </LazyLoad>
       
        {/* <LazyLoad height={200} offset={20}>
        <Testimonial/>
        </LazyLoad> */}
               
        <LazyLoad><Footer/></LazyLoad>

    </div>
  )
}

export default Home