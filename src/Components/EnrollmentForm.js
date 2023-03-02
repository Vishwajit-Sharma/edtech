import React, { useState } from "react";
import "../Styles/style.css"

const EnrollmentForm = ({course}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [select, setSelect] = useState(course ? course : "");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Mobile: ${mobile}, Course: ${select}`);
  };

  return (
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
        <select id="course" value={select} onChange={(e) => setSelect(e.target.value)} required>
          <option value="">-- Select a course --</option>
          <option value="web development 1">Web Development</option>
          <option value="Data Science">Data Science</option>
          <option value="Mobile App Development">Mobile App Development</option>
        </select>
      </div>
      <div className="d-flex justify-content-center pt-4"><button type="submit" className=" py-md-3 py-sm-2 py-2 px-lg-4 px-md-3 px-sm-4 px-4 read-btn">Submit</button></div>
      
    </form>
  );
};

export default EnrollmentForm;
