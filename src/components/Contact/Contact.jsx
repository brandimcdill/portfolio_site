import React from "react";
import "./Contact.css";

export default function ContactPortal() {
  return (
    <footer id="contact" className="contact-portal">
      <div className="contact-wrapper">
        <h2 className="serif-title">
          Got a project in <em>mind?</em>
        </h2>
        <p>
          Available for specialized freelance contracts and custom application
          deployments.
        </p>
        <a href="mailto:mcdillbrandig@gmail.com" className="email-link">
          mcdillbrandig@gmail.com
        </a>
        <p className="copyright-tag">© 2026 · Designed & Built by Me</p>
      </div>
    </footer>
  );
}
