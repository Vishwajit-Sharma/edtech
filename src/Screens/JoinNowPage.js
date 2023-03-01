import React from 'react'
import "../Styles/style.css"
import img from '../Assets/join-now.jpg'
import Footer from '../Components/Footer';

function JoinNowPage() {
    return (
        <div className='position-relative'>
            <img src={img} alt="" className='img-fluid'/>
      <div
        className="position-absolute w-100 top-0"
        style={{
          background: "rgba(24, 29, 56, 0.7)",
        }}
      >
        {/* <div className="join-now-box">
          <h2>Join Now</h2>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control" id="firstName" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control" id="lastName" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div> */}
      </div>
      <Footer/>
      </div>
    );
  }
  
  export default JoinNowPage;