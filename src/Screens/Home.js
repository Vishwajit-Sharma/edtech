import React, {useEffect} from 'react'
import ServiceCard from '../Components/ServiceCard'
import MyCarousel from '../Components/MyCarousel'
import Footer from '../Components/Footer'
import PopularCourses from '../Components/PopularCourses'
import HeadingContainer from '../Common/HeadingContainer'
//import Testimonial from '../Components/Testimonial'
import  LazyLoad  from 'react-lazyload';
import FAQ from '../Components/FAQ'
import OurUSP from '../Components/OurUSP'
import { Player } from '@lottiefiles/react-lottie-player';



const Home = () => {

  useEffect(() => {
    if (window.location.hash !== "#faq") {
      window.scrollTo(0, 0);
    } 
  }, []);
  
  const headingContainerContent = {
    topic: "About Us",
    subTopic: "Welcome to TechnoShaala",
    socialVisible: false,
    readMoreVisible: true,
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

  const faq = [
    {
      question: `How to enrol in any course?`,
      answer: `You go to that particular course page which you want to enrol. Then, click on Join Now button. A new Enrollment page will open. 
      Simply, fill the form and submit. Our representative will get in touch with you within 6 hours. That's it.`,
    },
    {
      question: `How to request for free demo?`,
      answer: `For free demo request, you need to fill up the form provided on home page or the course page. 
      Once, you submit the form, our representative will get in touch with you and schedule your demo with the instructor. `,
    },
    {
      question: `How would be the flow of the course?`,
      answer: `As you Enrol in the course of your choice, your Level-1 starts.  Usually, Level-1 Course content would be one-third of the
      total course content. During the Level-1 course, you need to attend the sessions, pass the evaluation, clear the mock interview 
      and complete the project. Once, our Instructor get satisfied that you're good to go for the next Level. Then, start your learning for the 
      Level-2 of the course. Here, also, you need to complete the course curriculum as expected. Then, we'll certify you.`,
    },
    {
      question: 'What is Level Based Approach?',
      answer: `Each of our courses are divided into two levels. As you enrolled with the course, Level-1 starts. 
      Then, after learning all the contents of Level-1, you'll clear Level-1 evaluation and project. After that only, you can proceed with the Level-2.
      Once our instructor clears you for Level-2, then your Level-2 begins. Here, you'll be required to complete the course Project and evaluation. After that only, we'll certify you`,
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
      question: `What if i don't clear Level-1 of the course?`,
      answer: `Don't worry. Our Instructors are good enough to help you go through the level-1. If you are sincere, you'll definitely clear it.
      However, if you even don't clear, you'll get time to reappear for the evaluation and be given time to complete the project.
      We'll help you in whatever the best possible way to clear Level-1. If you are descent and sincere, we'll make sure you'll clear Level-1 easily.`,
    },
    {
      question: 'Do I need to pay the fees in one go for both levels?',
      answer: `No. As we already emphasized that our motive is not to get paid only without bringing the actual result.
      So, you'll be required to pay the course amount for Level-1 only. When you clear the Level-1, then and only, you'll pay
      for Level-2.`,
    },
    {
      question: `What after Level-2 of the course?`,
      answer: `After completing the Level-2 of the course, as per the requirement, you'll be guided for resume building and other placements
      related things.`,
    },
    {
      question: `What are your timings for the course sessions and how long each session would be?`,
      answer: `It depends on the availability of instructor and the students. Mostly, we provide weekends and weekdays batches. 
      For weekends, timings are flexible as per the mutual understanding of the students and instructor. And as far as Weekdays batch is concerned, usually it is the morning or late night. 
      As far as duration is concerned, it depends on the specific course. 
      Usually, 1.5-2 hour session is there. So,  For precise timing details about a particular course, kindly contact us.`,
    },
    {
      question: `What about your communication skills session?`,
      answer: `You'll be provided with 2 Communication Skills session as per the avialability of the trainer during the Level-2 of the course tenure.
      It's completely free and optional. However, we'll recommend you to attend those two sessions as they will help you crack the interviews and 
      cope up with the corporate world.`,
    },
    {
      question: `What if I miss any session due to any personal reasons?`,
      answer: `Don't worry. Each of our sessions are recorded. So, you'll get the recording of the session if you miss any. Also, if you'll face any difficulty
      in understanding any of the missed concept, we'll schedule your time with the trainer. You can clear your doubts.`,
    },
    {
      question: `How is your placement assistance program? Do you guarantee job after completing course?`,
      answer: `Our placement assistance program includes your Resume building, Mock interviews(Technical+Non technical), Naukari and LinkedIn profile etc. After course completion, you'll be dedicatedly focused on these aspects.
      As far as Job guarantee is concerned, we believe in quality education. That's why, we came with Level based approach. Our course is designed in such a way that when you complete it, including all assessments, Projects and Mocks, 
      you yourself become capable in cracking any job interview. So, our goal is to make you Super capable enough to go ahead in your career. Not, to give you any false hope. 
      Remember, there are no Guarantees and warranties in life, only possibilities and opportunities are. And, we assure a career full of possibilities and opportunities for you.`,
    },
    {
      question: `What is your refund policy? If i am not satisfied with your course, do you have any money back policy ?`,
      answer: `As we already stated that we believe in Quality Education. Nothing less than that. So, be assured about our courses. 
      To help you decide, we provide free demo as well. But, still if you wish to get refund, you'll need to inform us before completion of  3 sessions of the course Level. 
      You'll get 100% money-back before 3 sessions. After that, no refund will be provided.`,
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