import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import ScrollToTop from "./ScrollToTop.jsx";

import Home from "./Routes/Home.jsx";
import Trending from "./Routes/Trending.jsx";
import Popular from "./Routes/Popular.jsx";
import Destinations from "./Routes/Destinations.jsx";
import About from "./Routes/About.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
