import React from 'react'
import '../Styles/style.css'
import { GiSkills } from "react-icons/gi";
import { FaArrowRight  } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

const Nav = () => {

    // const categories = ['Front End Development', 'Back End Development', 'Full Stack Development', 'Mobile Development'];

    return (

        <nav className="navbar navbar-expand-md nav-bg navbar-light shadow sticky-top top-0 p-0">
            <NavLink to="/" className="navbar-brand d-flex align-items-center px-3 px-md-4 px-lg-5">
                <h2 className="m-0 primary-color-text"><span className='me-2'><GiSkills /></span>Vishwa EdTech</h2>
            </NavLink>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <NavLink to="/" className="nav-item nav-link " end >Home</NavLink>
                    <NavLink to="/about" className="nav-item nav-link" >About</NavLink>
                    <NavLink to="/courses" className="nav-item nav-link" >Courses</NavLink>
                    {/* <div className="nav-item dropdown">
                        <NavLink to="/courses" className="nav-link"  >Courses <span className='dropdown-toggle'><FaAngleDown /></span></NavLink>
                        <div className="dropdown-menu fade-down m-0">
                            {categories.map(cat =>(
                                 <NavLink to={`/courses/${cat.toLowerCase()}`} className="dropdown-item" >{cat}</NavLink>
                            ))}
                        </div>
                    </div> */}
                  
                    <NavLink to="/contact" className="nav-item nav-link" >Contact</NavLink>
                </div>
                <button className="btn btn-primary primary-color-bg  px-lg-5 d-none d-md-block border-0 rounded-0 join-now"><span>Join Now </span><span className="ms-3"><FaArrowRight /></span></button>
            </div>
        </nav>
    )
}

export default Nav