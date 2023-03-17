import React, {useEffect} from 'react'
import img from '../Assets/coming.png'
import Footer from '../Components/Footer'

const ErrorPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   <>
    <div className="container-fluid p-5 d-flex justify-content-center">
      <img className="img-fluid w-50 h-50 " src={img} alt="" />
    </div>
    <Footer/>
    </>
  )
}

export default ErrorPage