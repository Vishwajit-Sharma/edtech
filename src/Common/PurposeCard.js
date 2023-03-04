import React from 'react'


const PurposeCard = ({icon, main, sub}) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center p-4 purpose-card'>
        <span className='primary-color-text fs-1'>{icon}</span>
        <h3>{main}</h3>
        <small>{sub}</small>
    </div>
  )
}

export default PurposeCard