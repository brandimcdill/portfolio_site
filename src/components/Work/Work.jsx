import React from "react";
import "./Work.css";

export default function Work() {
  const projects = [
    {
      id: "01",
      title: "S.A.P.P.H.I.R.A. Assistant",
      description:
        "An automated assistant configured with real-time text-to-speech loops, dynamic front-end tracking telemetry, and an Express incident manager that triggers an automated Latin possession route lockdown upon unauthorized intrusion attempts.",
      tags: ["React", "Express", "Node Streams", "AppSec"],
    },
    {
      id: "02",
      title: "se_project_NewsExplorer",
      description:
        "A fully responsive web dashboard capable of querying external data layers, handling third-party API integration, managing user state persistence arrays, and securing authentication credentials via customized JWT verification layers.",
      tags: ["React Router", "REST API", "JWT Authentication"],
    },
    {
      id: "03",
      title: "Architectural Teardowns",
      description:
        "Translating deep, complex application security practices and software engineering principles into highly scannable, mobile-optimized visual carousels for tech education platforms.",
      tags: ["Threat Modeling", "Technical Writing", "Content Strategy"],
    },
  ];

  return (
    <section id="work" className="work-archive">
      <h2 className="section-label">// SELECTED_WORK</h2>
      <div className="archive-list">
        {projects.map((project) => (
          <article className="archive-item" key={project.id}>
            <div className="item-meta">
              <span>{project.id}</span>
              <span>{project.title}</span>
            </div>
            <div className="item-body">
              <p>{project.description}</p>
              <div className="item-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
