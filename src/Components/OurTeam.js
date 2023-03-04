import React, { useState, useEffect, useRef } from 'react'
import '../Styles/style.css';
import HeadingTitle from '../Common/HeadingTitle';
import { FaLaptopCode, FaChalkboardTeacher, FaUserTie, FaHeadset } from 'react-icons/fa';


const OurTeam = () => {

    const [content, setContent] = useState([
        {icon: <FaLaptopCode/>, title: "Technical Experts", para: "Our team of technical experts has years of experience in their respective fields and is well-versed in the latest software technologies and best practices."},
        {icon: <FaChalkboardTeacher/>, title: "Instructional Designers", para: "Our instructional designers work closely with our technical experts to develop and design our courses. They ensure that our courses are engaging, interactive, and effective."},
        {icon: <FaUserTie/>, title: "Career Coaches", para: "Our career coaches provide guidance and support to our students as they navigate their job search. They work one-on-one with students to identify job opportunities, develop resumes and cover letters, and prepare for interviews."},
        {icon: <FaHeadset/>, title: "Customer Support", para: "Our customer support team is available to assist our students with any questions or concerns they may have. They are dedicated to providing exceptional service and ensuring that our students have a positive learning experience."},

    ])

    const showItemsRef = useRef(Array(content.length).fill(false));
  
    useEffect(() => {
      const timeoutIds = [];
      setContent((prevContent) => prevContent.map((item, index) => {
        const timeoutId = setTimeout(() => {
          showItemsRef.current[index] = true;
          forceUpdate();
        }, (index + 1) * 600);
        timeoutIds.push(timeoutId);
        return item;
      }));
      return () => {
        timeoutIds.forEach((id) => clearTimeout(id));
      };
    }, []);
  
    const forceUpdate = () => {
      setContent((prevContent) => [...prevContent]);
    };

  return (
    <div className="container-xxl py-5">
    <div className="container">
      <HeadingTitle title="Team" mainTitle="Our Team"/>
        <div className="row g-4"> 
        {content.map((item, index) =>  <div className={`col-md-6 col-lg-3 p-0 service-item-wrapper ${
                        showItemsRef.current[index] ? "show" : ""
                      }`}>
            <div className='d-flex flex-column  align-items-center our-team mx-2 p-4 h-100'>
            <h1 className='primary-color-text'>{item.icon}</h1>
            <h4>{item.title}</h4>
            <p>{item.para}</p>
            </div>
        </div>)}
        </div>
    </div>
  </div>
  )
}

export default OurTeam