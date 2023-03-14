import React, { useState } from 'react';
import "../Styles/style.css"
import HeadingTitle from '../Common/HeadingTitle';
import { Element } from 'react-scroll';

const FAQ = ({faqs}) => {

  const [activeIndex, setActiveIndex] = useState(-1);
  const [more, setMore] = useState(true);
  const [showCount, setShowCount] = useState(6);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const handleClick = () =>{
    setMore(false)
    setShowCount(faqs.length)
  }

  return (
 
    <Element name='faq'>
   <div className="conatiner-xxl py-5" id="faq">
     <div className="container pt-0">
        <HeadingTitle title="FAQ's" mainTitle="Frequently Asked Questions"/>
      <div className="faq-container">
        {faqs.slice(0, showCount).map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggle(index)}>
              <span className={`faq-icon ${activeIndex === index ? 'active' : ''}`}>
                {activeIndex === index ? '-' : '+'}
              </span>
              {faq.question}
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>{faq.answer}</div>
          </div>
        ))}
        {more && showCount < faqs.length && <button className='btn view-more' onClick={handleClick}>View More</button>}
      </div>
    </div>
   </div>
   </Element>
  );
};

export default FAQ;