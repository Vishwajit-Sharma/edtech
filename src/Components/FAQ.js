import React, { useState } from 'react';
import "../Styles/style.css"
import HeadingTitle from '../Common/HeadingTitle';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const faqs = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'What are the key features of React?',
      answer: 'React allows developers to create reusable UI components and provides a virtual DOM for fast rendering.',
    },
    {
      question: 'What are the advantages of using React?',
      answer: 'React provides high performance, easy maintenance, and great developer experience.',
    },
    {
      question: 'How can I get started with React?',
      answer: 'You can get started with React by learning the basics of HTML, CSS, and JavaScript, and then following some React tutorials and building small projects.',
    },
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
   <div className="conatiner-xxl py-5">
     <div className="container pt-5">
        <HeadingTitle title="FAQ's" mainTitle="Frequently Asked Questions"/>
      <div className="faq-container">
        {faqs.map((faq, index) => (
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
      </div>
    </div>
   </div>

  );
};

export default FaqSection;
