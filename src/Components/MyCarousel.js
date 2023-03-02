import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/style.css'
import { useNavigate  } from 'react-router-dom';
import img1 from '../Assets/carousel-1.jpg'
import img2 from '../Assets/carousel-2.jpg'

function MyCarousel() {

  const navigate = useNavigate()

  return (
    <div className="container-fluid p-0 mb-5">
      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
        <div className=''>
          <img src={img1} alt="Cat 1" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
            <div className="container mt-5">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="primary-color-text text-uppercase mb-3 carousel-main-heading">Grow Your Skills</h5>
                  <h1 className=" text-white mb-sm-3 mb-4 carousel-heading">The Best Online Learning Platform</h1>
                  <p className="text-white mb-4 pb-2 d-none d-sm-block carousel-para">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                  <button className="btn btn-primary py-md-3 py-sm-2 py-2 px-md-5 px-sm-4 px-3 me-3" onClick={()=>navigate("/courses/selectcourse/join")}>Join Now</button>
                  <button className="btn btn-light py-md-3 py-sm-2 py-2 px-md-5 px-sm-4 px-3" onClick={() => navigate('/courses')}>Explore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <img src={img2} alt="Cat 1" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="primary-color-text text-uppercase mb-3 carousel-main-heading">Grow Your Skills</h5>
                  <h1 className=" text-white mb-sm-3 mb-4 carousel-heading">The Best Online Learning Platform</h1>
                  <p className="text-white mb-4 pb-2 d-none d-sm-block carousel-para">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                  <button className="btn btn-primary py-md-3 py-sm-2 py-2 px-md-5 px-sm-4 px-3 me-3 " onClick={()=>navigate("/courses/selectcourse/join")}>Join Now</button>
                  <button className="btn btn-light py-md-3 py-sm-2 py-2 px-md-5 px-sm-4 px-3" onClick={() => navigate('/courses')}>Explore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <img src={img1} alt="Cat 1" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="primary-color-text text-uppercase mb-3 carousel-main-heading">Grow Your Skills</h5>
                  <h1 className=" text-white mb-sm-3 mb-4 carousel-heading">The Best Online Learning Platform</h1>
                  <p className="text-white mb-4 pb-2 d-none d-sm-block carousel-para">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                  <button className="btn btn-primary py-md-3 py-sm-2 py-2 px-md-5 px-sm-4 px-3 me-3 " onClick={()=>navigate("/courses/selectcourse/join")}>Join Now</button>
                  <button className="btn btn-light py-md-3 py-sm-2 py-2 px-md-5 px-sm-4 px-3" onClick={() => navigate('/courses')}>Explore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>


    </div>
  );
}

export default MyCarousel;
