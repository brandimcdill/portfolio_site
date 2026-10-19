import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-manifesto">
      <div className="manifesto-grid">
        <div className="manifesto-left">
          <h2 className="serif-title">
            A developer with <em>taste.</em>
          </h2>
        </div>
        <div className="manifesto-right">
          <p>
            I bring something rare to the engineering table: a professional
            history as a **color consultant**, a rigorous **Full-Stack Software
            Engineering** certification, and active training in
            **cybersecurity**.
          </p>
          <p>
            I understand that the best products don't just work — they **feel
            right**. Whether designing an intuitive front-end user experience or
            hardening backend database paths with automated incident response, I
            care deeply about the fine boundaries between luxury and
            functionality.
          </p>
          <div className="meta-metrics-grid">
            <div>
              <h4>Focus</h4>
              <p>Full-Stack / AppSec</p>
            </div>
            <div>
              <h4>Niche</h4>
              <p className="pink-text">Beauty × Tech</p>
            </div>
            <div>
              <h4>Availability</h4>
              <p>Open for Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
