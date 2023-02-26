import React from 'react'
import '../Styles/style.css'
import { useNavigate } from 'react-router-dom'

const MoreButton = ({text, navigateTo}) => {
  const navigate =  useNavigate()
  return (
   
    <button className=" py-md-3 py-sm-2 py-2 px-lg-4 px-md-3 px-sm-4 px-4 mt-2 more-btn" onClick={()=>navigate(`/${navigateTo}`)}>{text}</button>
    
  )
}

export default MoreButton