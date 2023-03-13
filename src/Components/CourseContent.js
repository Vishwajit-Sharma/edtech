import React,{useState} from 'react'
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import '../Styles/style.css'

const CourseContent = ({courseContentL1, courseContentL2}) => {

    const [activeAccordion1, setActiveAccordion1] = useState(null);

  const toggleAccordion1 = (index) => {
    setActiveAccordion1(activeAccordion1 === index ? null : index);
  };

  const [activeAccordion2, setActiveAccordion2] = useState(null);

  const toggleAccordion2 = (index) => {
    setActiveAccordion2(activeAccordion2 === index ? null : index);
  };

  return (
    <div className='container-xxl pb-5'>
    <div className='container'>
        <h4 className='mb-4'><span className='text-primary'>Level 1</span> </h4>
      {courseContentL1.map((content, index) => (
        <div className='row py-1' key={index}>
          <div className='col-12'>
            <div className='accordion-item '>
              <h6 className='accordion-header' onClick={() => toggleAccordion1(index)}>
              <span>
                 {index+1}. {content.title}
                </span>
                {activeAccordion1 === index ? (
                  <HiOutlineMinus className='d-inline' />
                ) : (
                  <HiOutlinePlus className='d-inline' />
                )}
               
              </h6>
              <div className={`accordion-collapse ${activeAccordion1 === index ? 'show' : ''}`}>
                <div className='accordion-body'>
                  <ul className='d-flex flex-column'>{content.details.map(item => <li>{item}</li>)}</ul>               
                </div>
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
              <h6 className='accordion-header' onClick={() => toggleAccordion2(index)}>
              <span>
                 {index+1}. {content.title}
                </span>
                {activeAccordion2 === index ? (
                  <HiOutlineMinus className='d-inline' />
                ) : (
                  <HiOutlinePlus className='d-inline' />
                )}
               
              </h6>
              <div className={`accordion-collapse ${activeAccordion2 === index ? 'show' : ''}`}>
                <div className='accordion-body'>
                  <ul className='d-flex flex-column'>{content.details.map(item => <li>{item}</li>)}</ul>      
                </div>
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