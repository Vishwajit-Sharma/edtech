import React from 'react';
import '../Styles/style.css';
import { GiDuration } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';


const CourseCard = ({cardContent}) => {

  const navigate = useNavigate()
   

  return (
    <div className={`col-lg-4 col-md-6 `}>
    <div className={`course-item ${cardContent.bgColor}`}>
      <div className="position-relative overflow-hidden">
           <img className="img-fluid" src={cardContent.img} alt="" />
          {cardContent.comingSoon ? <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-3">
              <button className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }} onClick={()=>navigate('/coming-soon')}>Read More</button>
              <button className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }} onClick={()=>navigate('/coming-soon')}>Join Now</button>
          </div> : 
            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-3">
              <Link className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }} to={`/courses/${cardContent.courseName.toLowerCase()}`}>Read More</Link>
              <Link className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }} to={`/courses/${cardContent.courseName.toLowerCase()}/join`}>Join Now</Link>
          </div>}
      </div>
      <div className="text-center p-4 pb-0">
          <h1 className="mb-3 primary-color-text">{cardContent.icon}</h1>
          <h5 className="mb-3">{cardContent.courseName}</h5>
          <p className='mb-4'>{cardContent.description}</p>
      </div>
      <div className="d-flex border-top">
          <small className="flex-fill text-center border-end py-2 text-warning">{cardContent.star.map(item=> <span>{item}</span>)}</small>
          <small className="flex-fill text-center border-end py-2"><span className="text-primary me-2"> <GiDuration/></span> {cardContent.time}</small>
      </div>
  </div> 
  </div>
  )
}

export default CourseCard