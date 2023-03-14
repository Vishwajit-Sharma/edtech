import React, { useState, useEffect, useRef } from 'react';
import '../Styles/style.css';
import { FaReact , FaPalette , FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import { DiPython } from 'react-icons/di';
import HeadingTitle from '../Common/HeadingTitle';
import img1 from '../Assets/react.jpg'
import img2 from '../Assets/webDesign.png'
import img3 from '../Assets/python.jpg'
import MoreButton from '../Common/MoreButton';
import { useNavigate } from 'react-router-dom';

const PopularCourses = () => {

  const navigate = useNavigate()

  const [content, setContent] = useState([
    {
      icon: <FaReact  />,
      courseName: "React JS",
      description: "ES-6 + JSX + Components + Hooks + Performance Optimization + Redux/Redux Toolkit",
      img: img1,
      time: "2 Months"
    },
    {
      icon: <FaPalette  />,
      courseName: "Web Designing",
      description: "HTML/HTML5 + CSS/CSS3 + Basic Javascript + DOM Manipulation",
      img: img2,
      time: "2 Months"
    },
    {
      icon: <DiPython />,
      courseName: "Python With Machine Learning",
      description: "Syntax + Basics + Control Flow + Functions + OOPS + Data preprocessing + ML Libraries",
      img: img3,
      time: "2 Months"
    },
   
  ]);
  
  const showItemsRef = useRef(Array(content.length).fill(false));
  
  useEffect(() => {
    const timeoutIds = [];
    setContent((prevContent) => prevContent.map((item, index) => {
      const timeoutId = setTimeout(() => {
        showItemsRef.current[index] = true;
        forceUpdate();
      }, (index + 1) * 700);
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
      <HeadingTitle title="Courses" mainTitle="Popular Courses" />
        <div className="row g-4 justify-content-center">
          {content.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 service-item-wrapper ${
                showItemsRef.current[index] ? "show" : ""
              }`}
            >
              <div className="course-item">
                <div className="position-relative overflow-hidden" style={{ maxHeight: '325px' }}>
                  {/* <div className='d-flex justify-content-center align-items-center h-100 lottie-div'   >{item.img}</div> */}
                     <img className="img-fluid" src={item.img} alt="" />
                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-3">
                        <button className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }} onClick={() => navigate(`/courses/${item.courseName.toLowerCase()}`)}>Read More</button>
                        <button className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }} onClick={() => navigate(`/courses/${item.courseName.toLowerCase()}/join`)}>Join Now</button>
                    </div>
                </div>
                <div className="text-center p-4 pb-0">
                    <h1 className="mb-3 primary-color-text">{item.icon}</h1>
                    <h5 className="mb-3">{item.courseName}</h5>
                    <p className='mb-4'>{item.description}</p>
                </div>
                <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2 text-warning"><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></small>
                    <small className="flex-fill text-center border-end py-2"><span className="text-primary me-2"> <GiDuration/></span> {item.time}</small>
                    {/* <small className="flex-fill text-center py-2"><span className="text-primary me-2"> <FaBookOpen/></span> 30 Students</small> */}
                </div>
            </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center mt-4">
           <MoreButton text="More Courses" navigateTo="courses"/>
        </div>
      
      </div>
    </div>
  );
};

export default PopularCourses;
