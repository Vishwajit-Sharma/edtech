import React,{useState, useRef, useEffect} from 'react'
import img from '../Assets/contact.jpg'
import img1 from '../Assets/contact.png'
import HeadingWallpaper from '../Common/HeadingWallpaper'
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import '../Styles/style.css'
import Footer from '../Components/Footer';
import Modal from 'react-bootstrap/Modal';
import emailjs from 'emailjs-com';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [modalData, setModalData] = useState({
    name: '',
    message: ''
  });
  const [show, setShow] = useState(false);

  const form = useRef();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    });

    setModalData({
      ...modalData,
      [event.target.id]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_kl0is4d', 'template_rdefu6b', form.current, 'Bs5nHUY1KHBmvIaLV')
    .then((result) => {
      setShow(true)
      setFormData({name: '', email: '', message:''})

    }, (error) => {
      console.log(error.text);
    });

  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <HeadingWallpaper img={img} heading="Contact" headLink="Contact"/>
    <div className="container-fluid contact-page">
      <div className="row px-4">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center contact-info ">
          <img src={img1} alt="" />
          <div className="contact-info-box">
            <h3>Contact Information</h3>
            <p><FaPhone className="contact-icon" /> Phone: +91-8087287984</p>
            <p><FaPhone className="contact-icon" /> Phone: +91-9049220303</p>
            {/* <p><FaEnvelope className="contact-icon" /> Email: contact@example.com</p> */}
          </div>
        </div>
        <div className="col-md-6 contact-form">
          <div className="contact-form-box">
            <h3>Send us a message</h3>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name='name' placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name='email' placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="5" name='message' placeholder="Enter your message" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
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
          Hey <strong>{modalData.name}</strong>, 
          <p>Your Message <strong>"{modalData.message}" </strong>is successfully received. Our team will reach back to you soon.</p>

        </Modal.Body>
      </Modal>
    </>
  );
};

export default Contact

//<HeadingWallpaper img={img} heading="Contact" headLink="Contact"/>Contact