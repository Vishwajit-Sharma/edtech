import React, { useState, useEffect, useRef }  from 'react'
import '../Styles/style.css'
import HeadingTitle from '../Common/HeadingTitle'
import FreeDemoForm from '../Common/FreeDemoForm'
import LazyLoad from 'react-lazyload';
import { GiSkills } from "react-icons/gi";

const Features = () => {

    const [content, setContent] = useState([
        {icon: <GiSkills/>, main: "100% Moneyback Gauarantee", sub: "No question asked"},
        {icon: <GiSkills/>, main: "Project Driven Sessions", sub: "Less theory, more practical"},
        {icon: <GiSkills/>, main: "Reward Based Learning", sub: "Get rewarded for performance"},
        {icon: <GiSkills/>, main: "Mock Interviews", sub: "Crack interviews"},
        {icon: <GiSkills/>, main: "100% Moneyback Gauarantee", sub: "No question asked"},
        {icon: <GiSkills/>, main: "100% Moneyback Gauarantee", sub: "No question asked"},
        {icon: <GiSkills/>, main: "100% Moneyback Gauarantee", sub: "No question asked"},
        {icon: <GiSkills/>, main: "100% Moneyback Gauarantee", sub: "No question asked"},
        {icon: <GiSkills/>, main: "100% Moneyback Gauarantee", sub: "No question asked"},
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
                <LazyLoad height={200} offset={20}>
                    <HeadingTitle title="Features" mainTitle="Our Features" />
                </LazyLoad>

                <LazyLoad height={200} offset={20}>
                    <div className="row features py-3">
                        <div className="col-lg-7 col-12 p-0 d-flex flex-wrap justify-content-center align-items-center">
                            {content.map((item, index) => 
                                <div className={`d-flex flex-column justify-content-center align-items-center p-3 each-feature service-item-wrapper ${
                                    showItemsRef.current[index] ? "show" : ""
                                  }`}>
                                    <span className='fs-1 primary-color-text'>{item.icon}</span>
                                    <h6>{item.main}</h6>
                                    <small>{item.sub}</small>
                                </div>)}
                            {/* <ul>
                                <li>Experienced, well Qualified and expert trainers </li>
                                <li>State of the art curriculum with newest industry practices focused on candidate's continued professional growth</li>
                                <li>Latest and verified course material</li>
                                <li>Hands on practical sessions and projects that are contemporary to real corporate scenarios</li>
                                <li>Small batch size for high focus, personal attention to every student and hassle free interactions with trainer</li>
                                <li>Special batch schedule for working professionals</li>
                                <li>Special sessions for interview preparation and mock interviews for job aspirants</li>
                                <li>Flexible batch timings</li>
                                <li>Free career mentorship by experienced professionals</li>
                                <li>Re-scheduling of missed classes</li>
                                <li>Well set up, comfortable study environment ( Air conditioning, individual power socket, wireless connectivity)</li>
                                <li>Software support for personal laptops( open source)</li>

                                <li>Strict confidentiality of student's details </li>
                                <li>Competitive course fees</li>
                            </ul> */}
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
