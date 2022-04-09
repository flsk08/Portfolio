import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { fadeInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackgroundColor);

  const styles = {
    fadeInDown: {
      animation: "7s",
      animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
    },
  };
  return (
    <>
      <StyleRoot>
        <div className="navbar-container">
          <nav
            className={navbar ? "navbar-container active" : "navbar-container"}
            style={styles.fadeInDown}
          >
            <NavLink className="navLink" to="/home">
              Home
            </NavLink>
            <NavLink className="navLink" to="/aboutme">
              About
            </NavLink>
            <NavLink className="navLink" to="/skills_and_tools">
              Skills
            </NavLink>
            <NavLink className="navLink" to="/projects">
              Projects
            </NavLink>
            <NavLink className="navLink" to="/contact">
              Contact
            </NavLink>
          </nav>
        </div>
      </StyleRoot>
    </>
  );
}
