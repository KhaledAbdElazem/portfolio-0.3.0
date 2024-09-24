
import './App.css'
import './style.css'
import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Home from "./components/Home/Home";  // Your Home component
import Navbar from "./components/Navbar";  // Example of another component/page
import Footer from "./components/Footer";  // Optional: for 404 handling
import Projects from "./components/Projects/Projects";  // Optional: for 404 handling
import About from "./components/About/About"; 
import Resume from './components/Resume/ResumeNew' 
import Preloader from './components/Pre'
import ScrollToTop from './components/ScrollToTop'// Optional: for 404 handling
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const App: React.FC = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);


  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Home />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
