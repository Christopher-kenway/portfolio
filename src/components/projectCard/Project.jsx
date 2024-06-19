import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div className="projects">
      <div className="project__head">
        <h2>#Projects</h2>
        <div className="horizontal__line"></div>
        <span>View all</span>
      </div>
      <div className="project-list"></div>
    </div>
  );
};

export default Project;
