import React, { useState, useEffect, useRef } from 'react'
import { GiSkills } from "react-icons/gi";
import { BiBook, BiBrain } from 'react-icons/bi';
import { IoMdBuild  } from 'react-icons/io';
import { AiFillLike  } from 'react-icons/ai';
import PurposeCard from '../Common/PurposeCard';
import HeadingTitle from '../Common/HeadingTitle';

const OurPurpose = () => {

    const [content, setContent] = useState([
        {icon: <BiBook />, main: "Quality Education", sub: "We don't believe in preaching. We intend to provide genuine service by impacting the lives of all the students who enrol with us."},
        {icon: <BiBrain />, main: "Creating Impactful Learning Experiences", sub: "We are committed to creating impactful learning experiences that go beyond the traditional classroom. Our courses are designed to be interactive, engaging, and relevant to today's job market."}, 
        {icon: <IoMdBuild />, main: "Bridging the Skills Gap", sub: "We recognize that there is a significant skills gap in many industries, and we aim to bridge that gap by providing training courses that are focused on practical skills and real-world applications."},  
        {icon: <AiFillLike />, main: "Fostering Lifelong Learning", sub: "We believe that learning is a lifelong journey, and we are dedicated to fostering a culture of continuous learning. Whether you are just starting your career or are looking to switch careers, our courses are designed to help you achieve your goals."},
    ])

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
      setContent((prevContent) => [...prevContent]);
    };


  return (
    <div className="container-xxl py-5 category">
            <div className="container">
                <HeadingTitle title="Purpose" mainTitle="Our Purpose" />
                <div className="row g-3">
                    {content.map((item,index) => 
                    <div key={index} className={`col-md-6 service-item-wrapper ${
                        showItemsRef.current[index] ? "show" : ""
                      }`}>
                        <PurposeCard icon={item.icon} main={item.main} sub={item.sub}/>
                    </div>)}
                </div>
            </div>
        </div>
  )
}

export default OurPurpose