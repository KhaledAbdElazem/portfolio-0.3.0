
import './App.css'
import './style.css'

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";  // Your Home component
import NavBar from "./components/Navbar";  // Example of another component/page
// import NotFound from "./components/NotFound";  // Optional: for 404 handling
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home route */}
        {/* <Route path="/src/" element={<AnotherPage />} />  Another page */}
        {/* <Route path="*" element={<NotFound />} />  Catch-all route for 404 */}
      </Routes>
    </Router>
  );
};

export default App;
