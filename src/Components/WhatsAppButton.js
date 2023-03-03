import React from 'react';
import '../Styles/style.css';
import img from '../Assets/whatsapp.png'

function WhatsAppButton() {
    const handleClick = () => {
        const message = encodeURIComponent('Hello, I want to enquire about - ');
        const phone = '918087287984';
        window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`);
      };

  return (

      <button onClick={handleClick} className="wa__btn">
        <img src={img} alt="WhatsApp Chat" />
      </button>

  );
}

export default WhatsAppButton;
