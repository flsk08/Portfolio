import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <NavLink className="navLink" to="/">Home</NavLink>
      <NavLink className="navLink" to="/aboutme">
        About
      </NavLink>
      <NavLink className="navLink" to="/projects">
        Projects
      </NavLink>
      <NavLink className="navLink" to="/contact">
        Contact
      </NavLink>
    </>
  );
}
