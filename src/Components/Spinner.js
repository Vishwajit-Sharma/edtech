import React from 'react'
import '../Styles/style.css'

const Spinner = () => {
    return (
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border primary-color-text" style={{ width: '8rem', height: '8rem' }} role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}

export default Spinner
