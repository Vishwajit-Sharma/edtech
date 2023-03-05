import React, { useState } from "react";
import "../Styles/style.css"
import Modal from 'react-bootstrap/Modal';

const EnrollmentForm = ({course}) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [select, setSelect] = useState(course ? course : "");

  const [show, setShow] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true)
  };

  const options = [
    { value: '', label: '-- Select a course --' },
    { value: 'Web Designing', label: 'Web Designing' },
    { value: 'Front End Development', label: 'Front End Development' },
    { value: 'Back End Development', label: 'Back End Development' },
    { value: 'Advanced Javascript', label: 'Advanced Javascript' },
    { value: 'Java', label: 'Java' },
    { value: 'React Js', label: 'React Js' },
    { value: 'Python With Machine Learning', label: 'Python With Machine Learning' },
  ];

  return (
    <>
    <form className="enrollment-form" onSubmit={handleSubmit}>
      <h2>Enrollment Form</h2>
      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-control">
        <label htmlFor="mobile">Mobile:</label>
        <input type="tel" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
      </div>
      <div className="form-control">
        <label htmlFor="course">Course:</label>
        <select id="course" value={select} onChange={(e) => setSelect(e.target.value)} required >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        </select>
      </div>
      <div className="d-flex justify-content-center pt-4"><button type="submit" className=" py-md-3 py-sm-2 py-2 px-lg-4 px-md-3 px-sm-4 px-4 read-btn">Submit</button></div>
      
    </form>

    <Modal
        show={show}
        onHide={()=>setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Congratulations {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for showing faith in us.</p>
         <p>You have successfully enrolled for <strong>{select}</strong> Course. Get ready to take your career to newer heights.</p>
         <p>Our team will reach back to you soon.</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EnrollmentForm;
