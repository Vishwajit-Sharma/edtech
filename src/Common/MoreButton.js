import React from 'react'
import '../Styles/style.css'

const MoreButton = ({text}) => {
  return (
   
    <button className=" py-md-3 py-sm-2 py-2 px-lg-4 px-md-3 px-sm-4 px-4 mt-2 more-btn" >{text}</button>
    
  )
}

export default MoreButton