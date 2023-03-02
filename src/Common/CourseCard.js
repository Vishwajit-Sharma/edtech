import React from 'react';
import '../Styles/style.css';
import { FaBookOpen } from "react-icons/fa";
import { Link } from 'react-router-dom';


const CourseCard = ({cardContent}) => {
   

  return (
    <div className={`col-lg-4 col-md-6 `}>
    <div className={`course-item ${cardContent.bgColor}`}>
      <div className="position-relative overflow-hidden">
           <img className="img-fluid" src={cardContent.img} alt="" />
          <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
              <Link className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }} to={`/courses/${cardContent.courseName.toLowerCase()}`}>Read More</Link>
              <Link className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }} to={`/courses/${cardContent.courseName.toLowerCase()}/join`}>Join Now</Link>
          </div>
      </div>
      <div className="text-center p-4 pb-0">
          <h3 className="mb-3 primary-color-text">{cardContent.icon}</h3>
          <h5 className="mb-3">{cardContent.courseName}</h5>
          <p className='mb-4'>{cardContent.description}</p>
      </div>
      <div className="d-flex border-top">
          <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2" />John Doe</small>
          <small className="flex-fill text-center border-end py-2"><span className="text-primary me-2"> <FaBookOpen/></span> {cardContent.time}</small>
          <small className="flex-fill text-center py-2"><span className="text-primary me-2"> <FaBookOpen/></span> 30 Students</small>
      </div>
  </div> 
  </div>
  )
}

export default CourseCard