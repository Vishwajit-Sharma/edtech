
import { Route, Routes, useLocation } from "react-router-dom";
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
        <Route path="/contact" element={<Contact  />}/>
       
      </Routes>
      </AnimatedWrapper>
      <BackToTop/>
        
    </div>
  );
}

export default App;
