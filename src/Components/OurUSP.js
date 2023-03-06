import React, { useState, useEffect, useRef }  from 'react'
import '../Styles/style.css'
import HeadingTitle from '../Common/HeadingTitle'
import FreeDemoForm from '../Common/FreeDemoForm'
import LazyLoad from 'react-lazyload';
import { GiGraduateCap, GiLevelEndFlag  } from "react-icons/gi";
import { FaHandsHelping , FaComments  } from "react-icons/fa";

const OurUSP = () => {

    const [content, setContent] = useState([
        {icon: <GiLevelEndFlag/>, main: "Level Based Approach", sub: `Our Curriculum is divided into two levels. You need to clear Level-1 to enter into Level-2. And when you complete Level-2, then and only we'll certify you. (Read FAQ's for more details )`},
        {icon: <FaComments />, main: "Bonus Communication Skills Sessions", sub: "You'll get 2 Bonus Sessions to enhance your communication skills, both Verbal and Non-verbal communication will be the focus"},
        {icon: <FaHandsHelping />, main: "Project Driven Curriculum", sub: "We don't want you to learn and learn only. We'll show you the outcome first, and then you'll be guided to achieve that."},
        {icon: <GiGraduateCap />, main: "Reward Based Learning", sub: "We believe in motivation. So, you can expect goodies/rewards/surprises based on your performance during the course tenure."},
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
                    <HeadingTitle title="Our USP" mainTitle="Why Choose Us" />
                </LazyLoad>

                <LazyLoad height={200} offset={20}>
                    <div className="row features py-3">
                        <div className="col-lg-7 col-12 p-0 ">
                        <div className="row g-3">
                            {content.map((item, index) => 
                                <div className={`col-12 d-flex flex-column justify-content-center align-items-center px-3 pb-3 each-feature service-item-wrapper ${
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

export default OurUSP
