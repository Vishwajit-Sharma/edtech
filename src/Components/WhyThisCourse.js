import React from 'react'
import HeadingTitle from '../Common/HeadingTitle'
import '../Styles/style.css'

const WhyThisCourse = ({course, why}) => {

  return (
    <div className="container-xxl py-5 category">
    <div className="container">
        <HeadingTitle title= "Course Features" mainTitle={`Why "${course}"`} />
        <div className="row g-3">
            <div className={`col-12 why-course bgColorFoundation py-3`}>
                <ul className=''>{why.map(item => <li className='mb-3 fs-5 p-2'>{item}</li>)}</ul> 
            </div>
        </div>
        {/* <div className="row my-4">
        <div className="col-sm-7 col-12 d-flex justify-content-center ">       
                <h2 className='text-center primary-color-text mb-4'>Still Confused ?</h2>
                
              </div>
              <div className="col-sm-5 col-12 d-flex justify-content-center ">       
                <span className='d-flex justify-content-center fs-6 mt-sm-5 mt-4'><MoreButton text="Contact Us" navigateTo="contact"/></span>
              </div>
        </div> */}
    </div>
</div>
  )
}

export default WhyThisCourse