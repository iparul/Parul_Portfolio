import React from "react";
import "./project-card.css";
import img from "./gloab.png";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <img
                  className="menu-icon"
                  src={img}
                  alt=""
                  style={{ width: "20px" }}
                />
                Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <i class="devicon-github-original colored"></i>
                github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <div className="tag">{tag}</div>;
          })}
        </div>
      </div>

      <img src={project.image} className="project-photo" />
    </div>
  );
}

export default ProjectCard;
