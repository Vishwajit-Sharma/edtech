import React, { useState, useEffect, useRef } from 'react';
import '../Styles/style.css';
import { FaLaptopCode, FaUserClock , FaHands , FaCode  } from "react-icons/fa";
import HeadingTitle from '../Common/HeadingTitle';

const ServiceItem = () => {
  const [content, setContent] = useState([
    {
      icon: <FaCode />,
      title: "Live Instructor Based Training Courses",
      para: "Explore our range of software training courses designed to help you acquire the skills and knowledge you need to succeed in the tech industry. Our courses cover a wide range of topics, including programming languages, web development, database management, and data science.",
    },
    {
      icon: <FaUserClock  />,
      title: "Career Development Services",
      para: "Our career development services are designed to help you take the next step in your career. We offer resume writing, interview coaching, job search assistance, and more. Our team of career experts will work with you to help you achieve your professional goals.",
    },
    {
      icon: <FaHands />,
      title: "Hands-On Project Based Courses",
      para: "Our hands-on training courses provide students with practical, real-world experience that they can apply to their jobs immediately. Our courses include coding exercises, group projects, and case studies to help students learn by doing.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Software Development Services",
      para: "We offer a wide range of software development services, including web application development, mobile app development, software maintenance, and more",
    },
  ]);
  
  const showItemsRef = useRef(Array(content.length).fill(false));
  
  useEffect(() => {
    const timeoutIds = [];
    setContent((prevContent) => prevContent.map((item, index) => {
      const timeoutId = setTimeout(() => {
        showItemsRef.current[index] = true;
        forceUpdate();
      }, (index + 1) * 400);
      timeoutIds.push(timeoutId);
      return item;
    }));
    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, []);

  const forceUpdate = () => {
    // Re-render the component with the updated showItemsRef value
    setContent((prevContent) => [...prevContent]);
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <HeadingTitle title="Services" mainTitle="What we offer"/>
        <div className="row g-4">
          {content.map((item, index) => (
            <div
              key={index}
              className={`col-lg-3 col-sm-6 service-item-wrapper ${
                showItemsRef.current[index] ? "show" : ""
              }`}
            >
              <div className="service-item text-center pt-3 h-100">
                <div className="p-4">
                  <span className="primary-color-text icon-font">
                    {item.icon}
                  </span>
                  <h5 className="mb-3">{item.title}</h5>
                  <p>{item.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
