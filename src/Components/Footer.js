import React from 'react'
import '../Styles/style.css';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaInstagram, FaFacebookF} from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {

const navigate = useNavigate()

  return (
    <div className="container-fluid  text-light footer pt-5 mt-5 " >
        <div className="container pb-4">
          <div className="row g-5">
            <div className="col-lg-3 col-sm-6">
              <h4 className="text-white mb-3">Quick Links</h4>
              <button className="btn btn-link" onClick={()=>navigate('/about')}>About Us</button>
              <button className="btn btn-link" onClick={()=>navigate('/contact')}>Contact Us</button>
              <button className="btn btn-link" onClick={()=>navigate('/courses/selectcourse/join')}>Join Now</button>
              <button className="btn btn-link" onClick={()=>navigate('/')}>Terms &amp; Condition</button>
              <Link className="text-decoration-none" to='/#faq' smooth={true} duration={500}> <a className="btn btn-link" >FAQs &amp; Help</a>   </Link>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2"><span className="me-3"><FaMapMarkerAlt/></span> Pune, India </p>
              <p className="mb-2"><span className="me-3"><FaPhoneAlt/></span>+91 8087287984</p>
              <p className="mb-2"><span className="me-3"><FaEnvelope/></span>info@example.com</p>
              {/* <div className="d-flex pt-2">
                <button className="btn btn-outline-light btn-social" ><span><FaLinkedinIn /></span></button>
                <button className="btn btn-outline-light btn-social" ><span><FaFacebookF /></span></button>
                <button className="btn btn-outline-light btn-social" ><span ><FaInstagram /></span></button>
                <button className="btn btn-outline-light btn-social" ><span><FaFacebookF /></span></button>
              </div> */}
            </div>
            <div className="col-lg-3 col-sm-6">
            <h4 className="text-white mb-3">Popular Courses</h4>
              <button className="btn btn-link" onClick={()=>navigate('/courses/web designing')}>Web Designing</button>
              <button className="btn btn-link" onClick={()=>navigate('/courses/react js')}>Reacts Js</button>
              <button className="btn btn-link" onClick={()=>navigate('/courses/python with machine learning')}>Python With Machine Learning</button>
              <button className="btn btn-link" onClick={()=>navigate('/courses/javascript')}>Javascript</button>
              <button className="btn btn-link" onClick={()=>navigate('/courses/java')}> Java</button>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h4 className="text-white mb-3">Newsletter</h4>
              <p>Get updated with our latest offerings</p>
              <div className="position-relative mx-auto" style={{maxWidth: '400px'}}>
                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" value="Coming Soon"/>
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2" disabled>SignUp</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">             
                <p>Copyright © 2023 <button className="text-dark border-bottom px-2" onClick={()=>navigate('/')}> www.technoshaala.com</button>, All Right Reserved.
                </p>
             
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer