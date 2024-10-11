import React, { useState } from "react";
import "./Navbar.css";

import { NavbarData } from "./NavbarData";

import {NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import Hero from "../Hero/Hero";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  });

  const [menu, setMenu] = useState(false);

  const handleClicked = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  return (
    <>
      <div className="navbar">
        <nav className={sticky ? "sticky-nav" : ""}>
          <h1 className="logo">
            Go<span>To</span>
          </h1>

          <ul
            className={menu ? "nav-menu active-list" : "nav-menu"}
            onClick={handleClicked}
          >
            {NavbarData.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={item.url}>{item.title}</NavLink>
                </li>
              );
            })}
          </ul>

          <div className="mobile">
            {menu === false ? (
              <FaBars className="open" onClick={handleClicked} />
            ) : (
              <FaTimes className="close" onClick={handleClicked} />
            )}
          </div>
        </nav>
        <Hero />
      </div>
    </>
  );
};

export default Navbar;
