import React from 'react'
import HeadingTitle from '../Common/HeadingTitle'
import '../Styles/style.css'

const WhyThisCourse = ({course, why}) => {

  return (
    <div className="container-xxl py-5 category">
    <div className="container">
        <HeadingTitle title= "Course Features" mainTitle={`Why "${course}"`} />
            
                <ul className='bgColorFoundation py-3'>
                  {why.map((item, index) => {
                    if(index%2 === 0){
                      return ( <div key={index} className="row  why-course px-2">
                        <div key={index} className='col-md-6 mb-3 '><li className='fs-6 p-2 '>{item}</li></div>
                        <div key={index+1} className='col-md-6 mb-3 '><li className='fs-6 p-2'>{why[index+1]}</li></div>
                      </div> )
                    }
                  })}
                </ul> 
    </div>
</div>
  )
}

export default WhyThisCourse