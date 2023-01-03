import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio.jsx";
import Skills from "./components/pages/Skills.jsx";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />}></Route>
        <Route path="skills" element={<Skills />} />
      </Routes>
    </Router>
  );
};
