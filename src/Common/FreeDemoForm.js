import React, { useState } from "react";
import '../Styles/style.css'

const courses = [
  "Course A",
  "Course B",
  "Course C",
  "Course D",
];

const FreeDemoForm = ({title, isCourse}) => {

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

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
    alert(`Name: ${name}\nMobile: ${mobile}\nEmail: ${email}\nCourse: ${selectedCourse}`);
  };

  return (
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
        value={selectedCourse}
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
  );
};

export default FreeDemoForm;
