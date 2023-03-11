import React, { useState, useEffect, useRef } from 'react'
import HeadingTitle from '../Common/HeadingTitle'
import '../Styles/style.css'
import { GiSkills } from "react-icons/gi";
import { Player } from '@lottiefiles/react-lottie-player';

const OurMethodology = () => {

    const [content, setContent] = useState([
        {step: "Step 1", icon: <GiSkills/>, main: "Identify Career Goals", sub:"We work with each student to identify their long-term career goals and determine the specific skills they need to achieve them. By aligning their training with their career objectives, our students are better prepared to succeed in their chosen field."},
        {step: "Step 2", icon: <GiSkills/>, main: "Customize Curriculum", sub:"Based on the student's career goals and skill level, we customize a curriculum that includes both technical and soft skills training. Our comprehensive curriculum ensures that our students are well-rounded and equipped to succeed in today's competitive job market."},
        {step: "Step 3", icon: <GiSkills/>, main: "Industry Experts as Instructors", sub:"ll of our courses are taught by industry experts with years of experience in their respective fields. Our instructors bring real-world experience and practical knowledge to the classroom, making our courses relevant and valuable for our students."},
        {step: "Step 4", icon: <GiSkills/>, main: "Hands-On Projects", sub:"Our courses include hands-on projects that allow students to apply what they have learned in a real-world setting. These projects are designed to simulate actual job responsibilities and help our students build a portfolio of work to showcase their skills to potential employers."},
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
        <div className="container-xxl py-5 category">
            <div className="container">
                <HeadingTitle title="Methods" mainTitle="Our Methodology" />
                <div className="row">
                <div className="col-lg-5 p-0 mt-0 d-block d-lg-none" style={{ minHeight: '220px' }}>
                       <div className='animation-lottie h-100 d-flex justify-content-center align-items-center'>
                       <Player autoplay loop speed="1.5" src="https://assets9.lottiefiles.com/packages/lf20_8cxcnczq.json" style={{ height: '500px', width: '550px' }}/>
                        </div>  
                  </div>
                  <div className="col-lg-7">
                  {content.map((item,index) => <div className={`row my-3 d-flex flex-column justify-content-center our-method p-2 service-item-wrapper ${
                        showItemsRef.current[index] ? "show" : ""
                      }`}>
                    <h3 className='d-flex justify-content-between primary-color-text mb-0'><span>{item.step}: {item.main}</span> <span className='fs-1'>{item.icon}</span></h3>
                    <p>{item.sub}</p>
                </div>)}
                  </div>
                  <div className="col-lg-5 p-0 mt-0 d-none d-lg-block" style={{ minHeight: '220px' }}>
                       <div className='animation-lottie h-100 d-flex justify-content-center align-items-center'>
                       <Player autoplay loop speed="1.5" src="https://assets9.lottiefiles.com/packages/lf20_8cxcnczq.json" style={{ height: '500px', width: '550px' }}/>
                        </div> 

                        {/* <div className="row"><div className='animation-lottie h-100 d-flex justify-content-center align-items-center px-3'>
                       <Player autoplay loop speed="1.5" src="https://assets9.lottiefiles.com/packages/lf20_vsiy6ziu.json"  style={{ height: '500px', width: '550px' }}/>
                        </div></div>
                    <div className="row"><div className='animation-lottie h-100 d-flex justify-content-center align-items-center'>
                       <Player autoplay loop speed="1.5" src="https://assets9.lottiefiles.com/packages/lf20_8cxcnczq.json" style={{ height: '500px', width: '550px' }}/>
                        </div></div>  */}
                  </div>
                </div>
                
            </div>
        </div>
    )
}

export default OurMethodology