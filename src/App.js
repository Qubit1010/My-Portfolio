import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Works from "./pages/Works";

// import  "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function App() {
  
  return (
    <div className="App">
        <Routes>
          <Route path="/" exact element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<Works />} />
        </Routes> 
    </div>
  );
}

export default App;
