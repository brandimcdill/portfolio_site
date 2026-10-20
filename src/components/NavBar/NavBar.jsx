import React from "react";
import "./NavBar.css";

export default function Navigation() {
  return (
    <nav className="main-nav">
      <div className="nav-logo">
        Brandi<em>McDill</em>
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#content">Content</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
