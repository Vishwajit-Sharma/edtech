import React from 'react';
import HeadingTitle from '../Common/HeadingTitle';
import '../Styles/style.css'
import { FaBookReader, FaUserGraduate } from "react-icons/fa";
import { GiLevelEndFlag } from "react-icons/gi";
import { BsFillSkipStartCircleFill } from "react-icons/bs";

function Process() {

    return (
        <div className="container-xxl py-5" >
            <HeadingTitle title="Course Journey" mainTitle="Your Journey"/>
            <div className="flowchart px-2">
                <div className="box">
                    <h3>Step 1</h3>
                    <p>Enroll in the course</p>
                   
                    <h2 className='text-center mb-3 primary-color-text'><BsFillSkipStartCircleFill/></h2>
                </div>
                <div className="arrow-container">
                    <div className="arrow"></div>
                </div>
                <div className="box">
                    <h3>Step 2</h3>
                    <p>Learn and Clear level 1</p>
                    <p>Complete the Project and clear Mock</p>
                    <h2 className='text-center mb-3 primary-color-text'><FaBookReader/></h2>
                </div>
                <div className="arrow-container">
                    <div className="arrow"></div>
                </div>
                <div className="box">
                    <h3>Step 3</h3>
                    <p>Start with the Level 2 of the Course</p>
                    <h2 className='text-center mb-3 primary-color-text'><GiLevelEndFlag/></h2>
                </div>
                <div className="arrow-container">
                    <div className="arrow"></div>
                </div>
                <div className="box">
                    <h3>Step 4</h3>
                    <p>Learn and Clear level 2</p>
                    <p>Complete the Project, Clear the Mock and get Certified</p>
                    <h2 className='text-center mb-3 primary-color-text'><FaUserGraduate/></h2>
                </div>
            </div>

        </div>

    );
}

export default Process;