import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import MyCarousel from '../Components/MyCarousel'
import Footer from '../Components/Footer'
import PopularCourses from '../Components/PopularCourses'
import HeadingContainer from '../Common/HeadingContainer'
//import Testimonial from '../Components/Testimonial'
import  LazyLoad  from 'react-lazyload';
import headingImage from '../Assets/about.jpg'
import FAQ from '../Components/FAQ'
import OurUSP from '../Components/OurUSP'


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
      question: 'What is Level Based Approach?',
      answer: `Each of our courses are divided into two levels. First you'll get enrolled with Level-1 of the course. 
      Then, after learning all the contents of Level-1, you'll clear Level-1 evaluation and project. then and only, you can get enrolled with Level-2.
      Once you enrol with Level-2, you'll be required to complete the course Project and evaluation. After that only, we'll certify you`,
    },
    {
      question: 'Why these Levels? Why not simply you provide all the content in one go?',
      answer: `We don't want students to join and just be there. We want serious & sincere students who actually want to get results. 
      Since, we believe in Results & outcome, that's why we want students to get assured that if they are sincere, we'll take their career to the newer heights.
      We don't want to get paid without actually bringing the results. That's why, our approach is totally outcome based.`,
    },
    {
      question: `What is your acceptance criteria to clear Level-1 of the course?`,
      answer: `You'll need to clear evaluation and complete the project, once the trainer finishes with the content of Level-1.
      You'll be given time for that. Also, we don't want to scrutinize you. We just want to see your sincerety. 
      Even if you're not able to clear evaluation and complete the project, but sincere enough in your efforts and 
      performace, we'll make sure you clear Level-1.`,
    },
    {
      question: 'Do we need to pay the fees in one go for both levels?',
      answer: `No. As we already emphasized that our motive is not to get paid only without bringing the actual result.
      So, you'll be required to pay the course amount for Level-1 only. When you clear the Level-1, then and only, you'll pay
      for Level-2.`,
    },
    {
      question: `What if i don't clear Level-1 of the course?`,
      answer: `Don't worry. Our Instructors are good enough to help you go through the level-1. If you are sincere, you'll definitely clear it.
      However, if you even don't clear, you'll get time to reappear for the evaluation and be given time to complete the project.
      We'll help you in whatever the best possible way to clear Level-1. If you are descent and sincere, we'll make sure you'll clear Level-1 easily.`,
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
        <OurUSP/>
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