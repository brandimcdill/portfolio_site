import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero-profile">
      <p className="hero-tagline">
        Full-Stack Software Engineer · Application Security
      </p>
      <h1 className="hero-main-title">
        Where beauty meets the code behind it.
      </h1>
      <p className="hero-description">
        I build elegant, functional web experiences — combining a deep technical
        background in full-stack architecture and cybersecurity with an eye for
        design that standard engineers overlook.
      </p>
      <div className="hero-actions">
        <a href="#work" className="btn-primary">
          View My Work
        </a>
        <a href="#contact" className="btn-secondary">
          Let's Connect
        </a>
      </div>
    </header>
  );
}
