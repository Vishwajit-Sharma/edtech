import React, { useState, useEffect, useRef } from 'react';
import '../Styles/style.css';
import { FaGraduationCap, FaGlobe, FaHome, FaBookOpen } from "react-icons/fa";
import HeadingTitle from '../Common/HeadingTitle';
import img1 from '../Assets/course-1.jpg'
import img2 from '../Assets/course-2.jpg'
import img3 from '../Assets/course-3.jpg'
import MoreButton from '../Common/MoreButton';
import { useNavigate } from 'react-router-dom';

const PopularCourses = () => {

  const navigate = useNavigate()

  const [content, setContent] = useState([
    {
      icon: <FaGraduationCap />,
      courseName: "React JS",
      description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      img: img1,
      time: "1 Month"
    },
    {
      icon: <FaGlobe />,
      courseName: "Web Designing",
      description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      img: img2,
      time: "1 Month"
    },
    {
      icon: <FaHome />,
      courseName: "Python With Machine Learning",
      description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      img: img3,
      time: "1 Month"
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
                <div className="position-relative overflow-hidden">
                     <img className="img-fluid" src={item.img} alt="" />
                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                        <button className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }} onClick={() => navigate(`/courses/${item.courseName.toLowerCase()}`)}>Read More</button>
                        <button className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }} onClick={() => navigate(`/courses/${item.courseName.toLowerCase()}/join`)}>Join Now</button>
                    </div>
                </div>
                <div className="text-center p-4 pb-0">
                    <h3 className="mb-3 primary-color-text">{item.icon}</h3>
                    <h5 className="mb-3">{item.courseName}</h5>
                    <p className='mb-4'>{item.description}</p>
                </div>
                <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2" />John Doe</small>
                    <small className="flex-fill text-center border-end py-2"><span className="text-primary me-2"> <FaBookOpen/></span> {item.time}</small>
                    <small className="flex-fill text-center py-2"><span className="text-primary me-2"> <FaBookOpen/></span> 30 Students</small>
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
