import React from 'react'
import '../Styles/style.css'

const HeadingTitle = ({ title, mainTitle }) => {
    return (

        <div className="text-center">
            <h6 className="section-title bg-white text-center primary-color-text px-3">{title}</h6>
            <h1 className="mb-5">{mainTitle}</h1>
        </div>
    )
}

export default HeadingTitle
