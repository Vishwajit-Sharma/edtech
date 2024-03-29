
import { Route, Routes, useLocation  } from "react-router-dom";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Courses from "./Screens/Courses";
import './App.css'
import Home from "./Screens/Home";
import Nav from "./Components/Nav";
import Spinner from "./Components/Spinner";
import { useEffect, useState } from "react";

import AnimatedWrapper from "./Components/AnimatedWrapper";
import RandomQuote from "./Components/RandomQuote";
import BackToTop from "./Components/BackToTop";
import ShowCourse from "./Screens/ShowCourse";
import JoinNowPage from "./Screens/JoinNowPage";
import WhatsAppButton from "./Components/WhatsAppButton";
import ComingSoon from "./Screens/ComingSoon";


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  //forSpinner
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [location]);

   useEffect(() => {

    const currentRoute = decodeURIComponent(location.pathname).split("/").pop();

    let pageTitle = "Vishwa Ed-Tech";

    if (currentRoute === "") {
      pageTitle = "Home";
    } else if (currentRoute === "about") {
      pageTitle = "About Us";
    } else if (currentRoute === "join") {
      pageTitle = "Join Now";
    } else {
      pageTitle = currentRoute.replace(/(^|\s)\S/g, (match) => match.toUpperCase());
    }
  
    document.title = pageTitle;
  }, [location]);


  return (
    <div >
       
      {isLoading && <Spinner />}
      
      <RandomQuote/>
      <Nav/>
      <AnimatedWrapper location={location}>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/courses" element={<Courses />}/>
        <Route path="/courses/:course" element={<ShowCourse />}/>
        <Route path="/contact" element={<Contact  />}/>
        <Route path="/courses/:course/join" element={<JoinNowPage  />}/>
        <Route path="/coming-soon" element={<ComingSoon  />}/>
       
      </Routes>
      </AnimatedWrapper>
      <WhatsAppButton/>
      <BackToTop/>
        
    </div>
  );
}

export default App;
