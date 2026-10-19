import React from "react";
import "./Showroom.css";

export default function Showroom() {
  return (
    <section id="content" className="content-showroom">
      <h2 className="section-label">// ON_YOUTUBE</h2>
      <div className="showroom-grid">
        <div className="showroom-left">
          <h3 className="serif-title">
            Bridging beauty culture and technology.
          </h3>
          <p>
            Beyond the codebase, I produce content exploring product deep-dives,
            software applications powering the beauty ecosystem, and structural
            software engineering demystified for everyday creators.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Visit My Channel →
          </a>
        </div>
        <div className="showroom-right">
          <div className="video-placeholder-frame">
            <p className="pink-text">[LATEST_DEPLOYMENT_STREAM]</p>
          </div>
        </div>
      </div>
    </section>
  );
}
