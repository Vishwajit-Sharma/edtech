import React from 'react'
import '../Styles/style.css';
import img1 from '../Assets/team-1.jpg'
import img2 from '../Assets/team-2.jpg'
import img3 from '../Assets/team-3.jpg'
import img4 from '../Assets/team-4.jpg'
import { FaLinkedinIn, FaInstagram, FaFacebookF} from "react-icons/fa";
import HeadingTitle from '../Common/HeadingTitle';


const Team = () => {
  return (
    <div className="container-xxl py-5">
    <div className="container">
      <HeadingTitle title="Team" mainTitle="Our Team"/>
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6 " >
          <div className="team-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src={img1} alt="" />
            </div>
            <div className="position-relative d-flex justify-content-center" style={{marginTop: '-23px'}}>
              <div className="bg-light d-flex justify-content-center pt-2 px-1">
                <button className="btn btn-sm-square btn-primary mx-1" ><FaFacebookF/></button>
                <button className="btn btn-sm-square btn-primary mx-1" ><FaLinkedinIn/></button>
                <button className="btn btn-sm-square btn-primary mx-1" ><FaInstagram/></button>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 ">
          <div className="team-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src={img2} alt="" />
            </div>
            <div className="position-relative d-flex justify-content-center" style={{marginTop: '-23px'}}>
              <div className="bg-light d-flex justify-content-center pt-2 px-1">
                <button className="btn btn-sm-square btn-primary mx-1" ><FaFacebookF/></button>
                <button className="btn btn-sm-square btn-primary mx-1" ><FaLinkedinIn/></button>
                <button className="btn btn-sm-square btn-primary mx-1" ><FaInstagram/></button>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 " >
          <div className="team-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src={img3} alt="" />
            </div>
            <div className="position-relative d-flex justify-content-center" style={{marginTop: '-23px'}}>
              <div className="bg-light d-flex justify-content-center pt-2 px-1">
                <button className="btn btn-sm-square btn-primary mx-1" ><FaFacebookF/></button>
                <button className="btn btn-sm-square btn-primary mx-1" ><FaLinkedinIn/></button>
                <button className="btn btn-sm-square btn-primary mx-1" ><FaInstagram/></button>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 " >
          <div className="team-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src={img4} alt="" />
            </div>
            <div className="position-relative d-flex justify-content-center" style={{marginTop: '-23px'}}>
              <div className="bg-light d-flex justify-content-center pt-2 px-1">
                <button className="btn btn-sm-square btn-primary mx-1" ><FaFacebookF/></button>
                <button className="btn btn-sm-square btn-primary mx-1" ><FaLinkedinIn/></button>
                <button className="btn btn-sm-square btn-primary mx-1" ><FaInstagram/></button>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Team