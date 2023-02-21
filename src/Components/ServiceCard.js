import React, { useState, useEffect, useRef } from 'react';
import '../Styles/style.css';
import { FaGraduationCap, FaGlobe, FaHome, FaBookOpen } from "react-icons/fa";
import HeadingTitle from '../Common/HeadingTitle';

const ServiceItem = () => {
  const [content, setContent] = useState([
    {
      icon: <FaGraduationCap />,
      title: "title1",
      para: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    },
    {
      icon: <FaGlobe />,
      title: "title2",
      para: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    },
    {
      icon: <FaHome />,
      title: "title3",
      para: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    },
    {
      icon: <FaBookOpen />,
      title: "title4",
      para: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    },
  ]);
  
  const showItemsRef = useRef(Array(content.length).fill(false));
  
  useEffect(() => {
    const timeoutIds = [];
    setContent((prevContent) => prevContent.map((item, index) => {
      const timeoutId = setTimeout(() => {
        showItemsRef.current[index] = true;
        forceUpdate();
      }, (index + 1) * 400);
      timeoutIds.push(timeoutId);
      return item;
    }));
    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, []);

  const forceUpdate = () => {
    // Re-render the component with the updated showItemsRef value
    setContent((prevContent) => [...prevContent]);
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <HeadingTitle title="Services" mainTitle="What we offer"/>
        <div className="row g-4">
          {content.map((item, index) => (
            <div
              key={index}
              className={`col-lg-3 col-sm-6 service-item-wrapper ${
                showItemsRef.current[index] ? "show" : ""
              }`}
            >
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <span className="primary-color-text icon-font">
                    {item.icon}
                  </span>
                  <h5 className="mb-3">{item.title}</h5>
                  <p>{item.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
