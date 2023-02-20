import React from 'react'
import '../Styles/style.css'

const HeadingTitle = ({ title, mainTitle }) => {
    return (

        <div class="text-center" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center primary-color-text px-3">{title}</h6>
            <h1 class="mb-5">{mainTitle}</h1>
        </div>
    )
}

export default HeadingTitle
