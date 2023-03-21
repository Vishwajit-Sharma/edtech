import React, { useState, useEffect } from 'react'
import '../Styles/style.css'
import { FaArrowRight } from "react-icons/fa";
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import logo from '../Assets/logo.png'

const Nav = () => {

    const [activeButton, setActiveButton] = useState(false)

    const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        setActiveButton(location.pathname.endsWith('/join'));
    }, [location]);


    return (

        <nav className="navbar navbar-expand-md nav-bg navbar-light shadow sticky-top top-0 p-0 py-1">
            
            <button type="button" className="navbar-toggler ms-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" onClick={toggleNavbar}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink to="/" className="navbar-brand d-flex align-items-center px-4 px-md-4 px-lg-5 ">
                <img src={logo} alt="" className='logo'/>
                <h2 className="m-0 primary-color-text d-none d-sm-flex">TechnoShaala</h2>
            </NavLink>
             <div  className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`}onClick={closeNavbar}>
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <NavLink to="/" className="nav-item nav-link " end >Home</NavLink>
                    <NavLink to="/about" className="nav-item nav-link" >About</NavLink>
                    <NavLink to="/courses" className="nav-item nav-link" >Courses</NavLink>
                    <NavLink to="/contact" className="nav-item nav-link" >Contact</NavLink>
                </div>
                <button className={`btn d-none d-md-block me-md-2 me-lg-4 join-now ${activeButton ? "activateBtn" : ""}`} onClick={() => navigate("/courses/selectcourse/join")}><span>Join Now </span><span className="ms-3"><FaArrowRight /></span></button>
            </div>
        </nav>
    )
}

export default Nav