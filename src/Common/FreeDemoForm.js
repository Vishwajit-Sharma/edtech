import React, { useState } from "react";
import '../Styles/style.css'
import Modal from 'react-bootstrap/Modal';

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

  const [show, setShow] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(true)
    setName("")
    setEmail("")
    setMobile("")
    setSelectedCourse("")
  };


  return (
    <>
    <form className="request-form" onSubmit={handleSubmit}>
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
      <button type="submit" className="btn btn-light">Submit</button>
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
          Hey <strong>{name}</strong>, Your request is successfully received. Our team will reach back to you soon.
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FreeDemoForm;
