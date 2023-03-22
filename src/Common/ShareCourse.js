import React from 'react'
import { AiOutlineWhatsApp } from "react-icons/ai";



const ShareCourse = ({heading}) => {

    // const shareCourse = async () => {
    //     try {
    //       await navigator.share({
    //         title: 'Check out this course',
    //         text: 'I found this amazing course on React development!',
    //         url: 'https://example.com/course'
    //       });
    //     } catch (error) {
    //       console.error('Error sharing course:', error);
    //     }
    //   };
    
    function handleWhatsAppShare() {
        // const url = `whatsapp://send?text=${encodeURIComponent(`Check out this Amazing ${heading} Course : `) + ' ' + encodeURIComponent('https://your-course-page-url.com')}`;
        const url = `whatsapp://send?text=${encodeURIComponent(`Check out this Amazing ${heading} Course : `) + ' ' + encodeURIComponent(`${window.location.href}`)}`;
        window.open(url);
      }
      

  return (
<button onClick={handleWhatsAppShare} className="share-button"> Share Course <AiOutlineWhatsApp/></button>

 // <button className='share-button' onClick={shareCourse} data-action="share/whatsapp">Share Course <AiOutlineShareAlt className='fs-4'/></button>
  )
}

export default ShareCourse