import React from 'react'
import '../Styles/style.css';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaInstagram, FaFacebookF} from "react-icons/fa";

const Footer = () => {

const navigate = useNavigate()

  return (
    <div className="container-fluid  text-light footer pt-5 mt-5 " >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Quick Link</h4>
              <button className="btn btn-link" onClick={()=>navigate('/about')}>About Us</button>
              <button className="btn btn-link" onClick={()=>navigate('/contact')}>Contact Us</button>
              <button className="btn btn-link" onClick={()=>navigate('/')}>Privacy Policy</button>
              <button className="btn btn-link" onClick={()=>navigate('/')}>Terms &amp; Condition</button>
              <button className="btn btn-link" onClick={()=>navigate('/')}>FAQs &amp; Help</button>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2"><span className="me-3"><FaMapMarkerAlt/></span> Pune, India </p>
              <p className="mb-2"><span className="me-3"><FaPhoneAlt/></span>+91 8087287984</p>
              <p className="mb-2"><span className="me-3"><FaEnvelope/></span>info@example.com</p>
              <div className="d-flex pt-2">
                <button className="btn btn-outline-light btn-social" ><span><FaLinkedinIn /></span></button>
                <button className="btn btn-outline-light btn-social" ><span><FaFacebookF /></span></button>
                <button className="btn btn-outline-light btn-social" ><span ><FaInstagram /></span></button>
                <button className="btn btn-outline-light btn-social" ><span><FaFacebookF /></span></button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Gallery</h4>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img className="img-fluid bg-light p-1" src="img/course-1.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid bg-light p-1" src="img/course-2.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid bg-light p-1" src="img/course-3.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid bg-light p-1" src="img/course-2.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid bg-light p-1" src="img/course-3.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid bg-light p-1" src="img/course-1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative mx-auto" style={{maxWidth: '400px'}}>
                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <button className="border-bottom">Your Site Name</button>, All Right Reserved.
                Designed By <button className="border-bottom" >Free Website Code</button>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <button >Home</button>
                  <button >Cookies</button>
                  <button >Help</button>
                  <button >FQAs</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer