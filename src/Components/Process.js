import React from 'react';
import HeadingTitle from '../Common/HeadingTitle';

function Process() {

    return (
        <div className="container-xxl py-5" >
            <HeadingTitle title="Process" mainTitle="Our Process"/>
            <div className="flowchart px-2">
                <div className="box">
                    <h3>Step 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="arrow-container">
                    <div className="arrow"></div>
                </div>
                <div className="box">
                    <h3>Step 2</h3>
                    <p>Nulla ac nisi non justo varius suscipit.</p>
                </div>
                <div className="arrow-container">
                    <div className="arrow"></div>
                </div>
                <div className="box">
                    <h3>Step 3</h3>
                    <p>Phasellus rutrum tellus eu tellus sagittis tempus.</p>
                </div>
                <div className="arrow-container">
                    <div className="arrow"></div>
                </div>
                <div className="box">
                    <h3>Step 4</h3>
                    <p>Proin ut lacus nec nibh mollis blandit.</p>
                </div>
            </div>

        </div>

    );
}

export default Process;