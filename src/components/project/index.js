import React, { useState } from "react";
import "./style.css";
import Button from "../button";
import { translate } from "../../utils/translate";
import MediaQuery from "react-responsive";

const Project = ({ project }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={`project-container ${isClicked ? "clicked" : ""}`}>
      <MediaQuery minWidth={700}>
        <div style={{ flex: 1 }}></div>
      </MediaQuery>
      <div className="project-details-container" onClick={() => setIsClicked(!isClicked)}>
        <div className="project-content-overlay"></div>
        <img className="project-image" src={project.image} alt={project.name} />
        <div className="project-content-description fadeIn-top">
          {project[translate("project-description-json")].split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <p className="project-name">{project.name}</p>
      </div>
      <div className="project-stacks">
        <ul>
          {project.stacks.map((texto, index) => (
            <li key={index}>{texto}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
