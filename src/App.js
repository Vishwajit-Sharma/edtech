
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Courses from "./Screens/Courses";

import Team from "./Screens/Team";
import './App.css'
import Home from "./Screens/Home";
import Nav from "./Components/Nav";
import Spinner from "./Components/Spinner";
import { useEffect, useState } from "react";

import AnimatedWrapper from "./Components/AnimatedWrapper";
import RandomQuote from "./Components/RandomQuote";


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
        
        <Route path="/" element={<Home className="wow fadeIn"/>}/>
        <Route path="/about" element={<About  className="wow fadeInUp"/>}/>
        <Route path="/courses" element={<Courses className="wow fadeIn"/>}/>
        <Route path="/contact" element={<Contact  className="wow fadeInUp"/>}/>
        <Route path="/team" element={<Team className="wow fadeIn"/>}/>
       
      </Routes>
      </AnimatedWrapper>
        
    </div>
  );
}

export default App;
