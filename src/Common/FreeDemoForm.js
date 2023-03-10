import React, { useState, useRef } from "react";
import '../Styles/style.css'
import Modal from 'react-bootstrap/Modal';
import emailjs from 'emailjs-com';

const courses = [
  "React Js",
  "Course B",
  "Course C",
  "Course D",
];

  const FreeDemoForm = ({title, isCourse, course}) => {

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [nameModal, setNameModal] = useState("");

  const [show, setShow] = useState(false);

  const form = useRef();

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameModal(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };


  const handleSubmit = (e) =>{
    
    e.preventDefault();
    emailjs.sendForm('service_kl0is4d', 'template_lqgo7vt', form.current, 'Bs5nHUY1KHBmvIaLV')
    .then((result) => {
      setShow(true)
      setName("")
      setEmail("")
      setMobile("")
      setSelectedCourse("")

    }, (error) => {
      console.log(error.text);
    });
  
  }


  return (
    <>
    <form className="request-form" ref={form} onSubmit={handleSubmit}>
      <h3 className="mb-4 text-center primary-color-text">{title}</h3>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name *"
        value={name}
        onChange={handleNameChange}
        required
      />
      <input
        type="tel"
        id="mobile"
        name="mobile"
        placeholder="Mobile *"
        value={mobile}
        onChange={handleMobileChange}
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email *"
        value={email}
        onChange={handleEmailChange}
        required
      />
      {isCourse && <select
        id="course"
        name="course"
        placeholder="Select a Course *"
        value={course ? course : selectedCourse}
        onChange={handleCourseChange}
        required
        className="text-light"
      >
        <option value="" className="bg-dark">Select a course</option>
        {courses.map((course) => (
          <option key={course} value={course} className="bg-dark">
            {course}
          </option>
        ))}
      </select>}
      <button type="submit" className="btn btn-light" >Submit</button>
    </form>

    <Modal
      show={show}
      onHide={()=>setShow(false)}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Thank you for your request</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Hey <strong>{nameModal}</strong>, Your request is successfully received. Our team will reach back to you soon.
      </Modal.Body>
    </Modal>   
    </>
  );
};

export default FreeDemoForm;
