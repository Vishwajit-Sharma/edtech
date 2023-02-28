import React,{useState} from 'react'
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import '../Styles/style.css'

const CourseContent = ({courseContentL1, courseContentL2}) => {

    const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className='container-xxl pb-5'>
    <div className='container'>
        <h4 className='mb-4'><span className='text-primary'>Level 1</span> </h4>
      {courseContentL1.map((content, index) => (
        <div className='row' key={index}>
          <div className='col-12'>
            <div className='accordion-item '>
              <h5 className='accordion-header' onClick={() => toggleAccordion(index)}>
              <span>
                 {index+1}. {content.title}
                </span>
                {activeAccordion === index ? (
                  <HiOutlineMinus className='d-inline' />
                ) : (
                  <HiOutlinePlus className='d-inline' />
                )}
               
              </h5>
              <div className={`accordion-collapse ${activeAccordion === index ? 'show' : ''}`}>
                <div className='accordion-body'>{content.details}</div>
              </div>
            </div>
          </div>
        </div>
      ))}

        <h4 className='mb-4 mt-5'><span className='text-primary'>Level 2</span></h4>
      {courseContentL2.map((content, index) => (
        <div className='row' key={index}>
          <div className='col-12'>
            <div className='accordion-item '>
              <h5 className='accordion-header' onClick={() => toggleAccordion(index)}>
              <span>
                 {index+1}. {content.title}
                </span>
                {activeAccordion === index ? (
                  <HiOutlineMinus className='d-inline' />
                ) : (
                  <HiOutlinePlus className='d-inline' />
                )}
               
              </h5>
              <div className={`accordion-collapse ${activeAccordion === index ? 'show' : ''}`}>
                <div className='accordion-body'>{content.details}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default CourseContent