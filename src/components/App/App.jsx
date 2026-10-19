import React from "react";
import "./App.css";
import Navigation from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Work from "../Work/Work";
import Showroom from "../Showroom/Showroom";
import ContactPortal from "../Contact/Contact";

export default function App() {
  return (
    <div className="portfolio-container">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Showroom />
      <ContactPortal />
    </div>
  );
}
