
import './App.css'
import './style.css'

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";  // Your Home component
import NavBar from "./components/Navbar";  // Example of another component/page
import Footer from "./components/Footer";  // Optional: for 404 handling
import Projects from "./components/Projects/Projects";  // Optional: for 404 handling
import About from "./components/About/About"; 
import Resume from './components/Resume/ResumeNew' // Optional: for 404 handling
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home route */}
        <Route path="/project" element={<Projects />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="*" element={<NotFound />} />  Catch-all route for 404 */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
