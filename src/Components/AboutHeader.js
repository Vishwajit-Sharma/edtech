import React, { useEffect, useState } from 'react'
import '../Styles/style.css';
import img from '../Assets/about.jpg'
import { FaArrowRight, FaLinkedin, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const AboutHeader = ({readMoreVisible}) => {

    const navigate  = useNavigate()

    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setShowContent(true);
        }, 100);

        return () => clearTimeout(delay);
    }, []);


    return (

            <div className= {`container-xxl py-5 service-item-wrapper ${showContent ? 'show': ''}`}>
            <div className="container ">
                <div className="row g-5 ">
                    <div className="col-lg-6" style={{ minHeight: '400px' }}>
                        <div className="position-relative h-100 ">
                            <img className="img-fluid position-absolute w-100 h-100 grayScale" src={img} alt="" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="col-lg-6 " >
                        <h6 className="section-title bg-white text-start primary-color-text pe-3">About Us</h6>
                        <h1 className="mb-4">Welcome to eLEARNING</h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="row gy-2 gx-4 mb-2">
                            <div className="col-sm-6">
                                <p className="mb-0"><span className='primary-color-text me-2'><FaArrowRight /></span>Skilled Instructors</p>
                            </div>
                            <div className="col-sm-6">

                                <p className="mb-0"><span className='primary-color-text me-2'><FaArrowRight /></span>Online Classes</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><span className='primary-color-text me-2'><FaArrowRight /></span>International Certificate</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><span className='primary-color-text me-2'><FaArrowRight /></span>Skilled Instructors</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><span className='primary-color-text me-2'><FaArrowRight /></span>Online Classes</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><span className='primary-color-text me-2'><FaArrowRight /></span>International Certificate</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between' style={{ width: "20%" }}>
                            <button className='primary-color-text social'><FaLinkedin /></button>
                            <button className='primary-color-text social'><FaInstagramSquare /></button>
                            <button className='primary-color-text social'><FaFacebookSquare /></button>
                        </div>
                        <div className="row justify-content-lg-start justify-content-center mt-3">
                        {readMoreVisible && <button className=" py-md-3 py-sm-2 py-2 px-lg-4 px-md-3 px-sm-4 px-4 read-btn" onClick={()=>navigate('/about')}>Read More</button>}
    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHeader