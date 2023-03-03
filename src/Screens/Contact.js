import React,{useState} from 'react'
import img from '../Assets/carousel-1.jpg'
import img1 from '../Assets/contact.png'
import HeadingWallpaper from '../Common/HeadingWallpaper'
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import '../Styles/style.css'
import Footer from '../Components/Footer';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // TODO: Add code to send form data to backend or display success message
  };
  return (
    <>
    <HeadingWallpaper img={img} heading="Contact" headLink="Contact"/>
    <div className="container-fluid contact-page">
      <div className="row px-4">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center contact-info ">
          <img src={img1} alt="" />
          <div className="contact-info-box">
            <h3>Contact Information</h3>
            <p><FaPhone className="contact-icon" /> Phone: 123-456-7890</p>
            <p><FaEnvelope className="contact-icon" /> Email: contact@example.com</p>
          </div>
        </div>
        <div className="col-md-6 contact-form">
          <div className="contact-form-box">
            <h3>Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact

//<HeadingWallpaper img={img} heading="Contact" headLink="Contact"/>Contact