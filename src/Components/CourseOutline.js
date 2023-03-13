import React from 'react'
import { AiOutlineFundProjectionScreen, AiOutlineFund, AiOutlineForm, AiOutlineSafetyCertificate } from "react-icons/ai";
import { GiDiscussion } from "react-icons/gi";
import { FaClipboardCheck } from 'react-icons/fa';
import '../Styles/style.css'
import FreeDemoForm from '../Common/FreeDemoForm';

const CourseOutline = ({ duration, preRequisites, included, course }) => {
  return (
    <div className='container-xxl pt-0 pb-5'>
      <div className="container">
        <div className="row py-3">
          <div className="col-lg-7 col-12 p-3">
            <div className="row align-items-center h-100 ">
              <div className="col-12 p-4 mt-0 bgColorFoundation d-flex align-items-center mb-lg-0 mb-3">
                <div>
                  <p className="mb-2"><span className="fw-bold me-2">Duration:</span>{duration}</p>
        
                  <div className='d-flex flex-column mb-3'>
                    <span className="fw-bold me-2">Pre-requisites:</span>
                    <ul className=" mb-0">
                      {preRequisites.map(item => <li>&nbsp;{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 p-4 mt-0 bgColorFoundation ">
                <div>
                  <div className='row mb-0 outline'>
                    <div className='col-6 col-md-6 mb-3 '>
                      <div className='d-flex align-items-center including'>
                        <span className='me-2 primary-color-text fw-bold fs-3'><AiOutlineFund /></span>
                        <span className='fw-bold'>{included[0]}</span>
                      </div>
                    </div>
                    <div className='col-6 col-md-6 mb-3'>
                      <div className='d-flex align-items-center including'>
                        <span className='me-2 primary-color-text fw-bold fs-3'><AiOutlineFundProjectionScreen /></span>
                        <span className='fw-bold'>{included[1]}</span>
                      </div>
                    </div>
                    <div className='col-6 col-md-6 mb-3'>
                      <div className='d-flex align-items-center including'>
                        <span className='me-2 primary-color-text fw-bold fs-3'><AiOutlineForm /></span>
                        <span className='fw-bold'>Assignments</span>
                      </div>
                    </div>
                    <div className='col-6 col-md-6 mb-3'>
                      <div className='d-flex align-items-center including'>
                        <span className='me-2 primary-color-text fw-bold fs-3'><FaClipboardCheck  /></span>
                        <span className='fw-bold'>Assessment Tests</span>
                      </div>
                    </div>
                    <div className='col-6 col-md-6 mb-3'>
                      <div className='d-flex align-items-center including'>
                        <span className='me-2 primary-color-text fw-bold fs-3'><GiDiscussion /></span>
                        <span className='fw-bold'>Mock Interviews</span>
                      </div>
                    </div>
                    <div className='col-6 col-md-6 mb-3'>
                      <div className='d-flex align-items-center including'>
                        <span className='me-2 primary-color-text fw-bold fs-3'><AiOutlineSafetyCertificate /></span>
                        <span className='fw-bold'>Certificate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12 d-flex align-items-center justify-content-lg-end justify-content-center pe-lg-4 mt-5 mt-lg-0">
            <FreeDemoForm title="Request for Free Demo" isCourse={true} course={course} />
          </div>
        </div>
      </div>

    </div>

  )
}

export default CourseOutline