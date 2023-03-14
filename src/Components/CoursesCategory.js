import React from 'react'
import HeadingTitle from '../Common/HeadingTitle'
import '../Styles/style.css'
import { Link } from 'react-scroll';
//import {Link as RouterLink} from 'react-router-dom'
import img1 from '../Assets/cat-1.jpg'
import img2 from '../Assets/cat-2.jpg'
import img3 from '../Assets/cat-3.jpg'
import img4 from '../Assets/cat-4.jpg'

const CoursesCategory = () => {
  return (
       
     <div className="container-xxl py-5 category">
     <div className="container">
     <HeadingTitle title="Categories" mainTitle="Courses Categories"/>
       <div className="row g-3">
         <div className="col-lg-7 col-md-6">
           <div className="row g-3">
           
             <div className="col-lg-12 col-md-12 " >
               <Link className="position-relative d-block overflow-hidden" to='development' smooth={true} duration={500}>
                 <img className="img-fluid" src={img1} alt="" />
                 <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                   <h5 className="m-0 text-dark">Web Development Courses</h5>
                   <small className="primary-color-text">3 Courses</small>
                 </div>
               </Link>
             </div>
                      
             <div className="col-lg-6 col-md-12 " >
               <Link className="position-relative d-block overflow-hidden" to='professional' smooth={true} duration={500}>
                 <img className="img-fluid" src={img2} alt="" />
                 <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                   <h5 className="m-0 text-dark">Programming Languages</h5>
                   <small className="primary-color-text">2 Courses</small>
                 </div>
               </Link>
             </div>
                      
             <div className="col-lg-6 col-md-12 " >
               <Link className="position-relative d-block overflow-hidden" to='trending' smooth={true} duration={500}>
                 <img className="img-fluid" src={img3} alt="" />
                 <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                   <h5 className="m-0 text-dark">Trending Course</h5>
                   <small className="primary-color-text">2 Courses</small>
                 </div>
               </Link>
             </div>
           
           </div>
         </div>
         <div className="col-lg-5 col-md-6 "  style={{minHeight: '350px'}}>
           <Link className="position-relative d-block h-100 overflow-hidden" to='different' smooth={true} duration={500}>
             <img className="img-fluid position-absolute w-100 h-100" src={img4} alt="" style={{objectFit: 'cover'}} />
             <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
               <h5 className="m-0 text-dark">Something Different</h5>
               <small className="primary-color-text">1 Course</small>
             </div>
           </Link>
         </div>
        
       </div>
     </div>
   </div>
  )
}

export default CoursesCategory