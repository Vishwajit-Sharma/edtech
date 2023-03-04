import React, { useState, useEffect, useRef } from 'react'
import { GiSkills } from "react-icons/gi";
import PurposeCard from '../Common/PurposeCard';
import HeadingTitle from '../Common/HeadingTitle';

const OurPurpose = () => {

    const [content, setContent] = useState([
        {icon: <GiSkills/>, main: "Quality Education", sub: "We don't believe in preaching. We intend to provide genuine service by impacting the lives of all the students who enrol with us."},
        {icon: <GiSkills/>, main: "Diverse Ecosystem", sub: "We don't believe in preaching. We intend to provide genuine service by impacting the lives of all the students who enrol with us."}, 
        {icon: <GiSkills/>, main: "Community Engagement", sub: "We don't believe in preaching. We intend to provide genuine service by impacting the lives of all the students who enrol with us."},  
        {icon: <GiSkills/>, main: "Quality Education", sub: "We don't believe in preaching. We intend to provide genuine service by impacting the lives of all the students who enrol with us."},
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