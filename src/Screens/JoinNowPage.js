import React from 'react'
import "../Styles/style.css"
import img from '../Assets/join-now.jpg'
import Footer from '../Components/Footer';
import EnrollmentForm from '../Components/EnrollmentForm';
import { useParams } from 'react-router-dom';

function JoinNowPage() {

  const { course } = useParams();
  const courseCapitalise = course.replace(/(^|\s)\S/g, (match) => match.toUpperCase());

  return (
    <div className='container-fluid p-0'>
      <div className="row pt-3 m-0">
        <div className="col-lg-7 p-0">
          <div className='join-now-container' style={{
            background: `linear-gradient(rgba(24, 29, 56, .7), rgba(24, 29, 56, .7)), url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            objectFit: "scale-down",
          }}>
          </div>
        </div>
        <div className="col-lg-5  d-flex align-items-center justify-content-center pt-lg-0 pt-3"><EnrollmentForm course={courseCapitalise} /></div>
      </div>
      <Footer />
    </div>

  );
}

export default JoinNowPage;