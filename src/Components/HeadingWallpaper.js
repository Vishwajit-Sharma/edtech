import React from 'react'
import '../Styles/style.css'
import { NavLink } from 'react-router-dom'

const HeadingWallpaper = ({ img, heading, headLink}) => {
    return (
        <div className='container-fluid mx-0 px-0 heading-container'>
            <img src={img} alt="" className='heading-img' />
            <div className="heading-content">
                <h1 className="text-white">{heading}</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><NavLink className="primary-color-text" to="/">Home</NavLink></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">{headLink}</li>
                    </ol>
                </nav>

            </div>
        </div>
    )
}

export default HeadingWallpaper