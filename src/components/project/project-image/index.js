import React, { useState } from "react";
import { translate } from "../../../utils/translate";
import "./style.css";

function ProjectImage({ project, setIsClicked }) {
  return (
    <div className="project-details-container" onClick={() => setIsClicked()}>
      <div className="project-content-overlay"></div>
      <img className="project-image" src={project.image} alt={project.name} />
      <div className="project-content-description fadeIn-top">
        {project[translate("project-description-json")].split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <p className="project-name">{project.name}</p>
    </div>
  );
}

export default ProjectImage;
