import React from "react";

import { Link } from "react-router-dom";

import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <h2>Your Journey Your Story</h2>

        <h2>Choose Your Favourite Popular Destinations</h2>
        <button>
          <Link to="/popular">Plan Travel</Link>
        </button>
      </div>
    </>
  );
};

export default Hero;
