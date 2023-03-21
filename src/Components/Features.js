import React, { useState, useEffect, useRef }  from 'react'
import '../Styles/style.css'
import HeadingTitle from '../Common/HeadingTitle'
import FreeDemoForm from '../Common/FreeDemoForm'
import LazyLoad from 'react-lazy-load';
import { GiGraduateCap  } from "react-icons/gi";
import { FaMoneyBillAlt  , FaClock , FaHandsHelping , FaComments , FaSuitcase , FaUserEdit , FaCertificate , FaCommentDots } from "react-icons/fa";

const Features = () => {

    const [content, setContent] = useState([
        {icon: <FaMoneyBillAlt/>, main: "100% Moneyback Gauarantee", sub: "No question asked"},
        {icon: <FaHandsHelping/>, main: "Project Driven Sessions", sub: "Less theory, more practical"},
        {icon: <GiGraduateCap />, main: "Reward Based Learning", sub: "Get rewarded for performance"},
        {icon: <FaSuitcase />, main: "Job Placement Assistance", sub: "Get help finding your dream job"},
        {icon: <FaClock />, main: "Flexible Scheduling", sub: "Study at your own pace"},
        {icon: <FaComments  />, main: "Interactive Learning", sub: "Engage in interactive discussions and activities"},
        {icon: <FaUserEdit />, main: "Personalized Learning", sub: "Tailored to your learning style and needs"},
        {icon: <FaCertificate />, main: "Professional Certificate", sub: "Earn a certificate upon completion"},
        {icon: <FaCommentDots />, main: "Support and Feedback", sub: "Support and feedback from instructors and peers"},
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
        <div className='container-xxl py-5'>
            <div className="container">
                <LazyLoad offset={20}>
                    <HeadingTitle title="Our USP" mainTitle="Why Choose Us" />
                </LazyLoad>

                <LazyLoad  offset={20}>
                    <div className="row features py-3">
                        <div className="col-lg-7 col-12 p-0 ">
                          <div className="row g-3">
                            {content.map((item, index) => 
                                <div className={`col-sm-6 col-12 d-flex flex-column justify-content-center align-items-center px-3 pb-3 each-feature service-item-wrapper ${
                                    showItemsRef.current[index] ? "show" : ""
                                  }`}>
                                    <span className='fs-1 primary-color-text'>{item.icon}</span>
                                    <h6>{item.main}</h6>
                                    <small>{item.sub}</small>
                                </div>)}
                          </div>
                        </div>
                        <div className="col-lg-5 col-12 d-flex align-items-center justify-content-lg-end justify-content-center pe-lg-4 mt-5 mt-lg-0">
                             <FreeDemoForm title="Request for Free Demo" isCourse={true} />

                        </div>
                    </div>
                </LazyLoad>


            </div>
        </div>
    )
}

export default Features
