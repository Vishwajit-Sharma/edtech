import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../Styles/style.css'
import img1 from '../Assets/testimonial-1.jpg'
import img2 from '../Assets/testimonial-2.jpg'
import img3 from '../Assets/testimonial-3.jpg'
import img4 from '../Assets/testimonial-4.jpg'
import HeadingTitle from '../Common/HeadingTitle';

const Testimonial = () => {

  const testimonialItems = [
    {
      name: 'Client Name 1',
      profession: 'Profession 1',
      quote: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
      image: img1,
    },
    {
      name: 'Client Name 2',
      profession: 'Profession 2',
      quote: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
      image: img2,
    },
    {
      name: 'Client Name 3',
      profession: 'Profession 3',
      quote: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
      image: img3,
    },
    {
      name: 'Client Name 4',
      profession: 'Profession 4',
      quote: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
      image: img4,
    },
  ];

  const testimonialItemsMarkup = testimonialItems.map((item, index) => (
    <div key={index} className="testimonial-item text-center">
      <img
        className="border rounded-circle p-2 mx-auto mb-3"
        src={item.image}
        style={{ width: '80px', height: '80px' }}
        alt=""
      />
      <h5 className="mb-0">{item.name}</h5>
      <p>{item.profession}</p>
      <div
        className={`testimonial-text bg-light text-center p-4 }`}
      >
        <p className="mb-0">{item.quote}</p>
      </div>
    </div>
  ));

  return (
    <div className="container-xxl py-5" >

      <div className="container">
      <HeadingTitle title="Testimonials" mainTitle="What our Students say" />
        <div className="row g-4 justify-content-center">
        <OwlCarousel
      className="owl-theme testimonial-carousel position-relative"
      loop
      margin={10}
      dotsEach={1}
    >
      {testimonialItemsMarkup}
    </OwlCarousel>
        </div>
        </div>

      
               
    </div>
  )
}

export default Testimonial