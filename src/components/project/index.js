import React, { useState } from "react";

import "./style.css";

import Button from "../button";
import { translate } from "../../utils/translate";

const myEmail = "pedro.armando15@hotmail.com";

export default ({ project }) => {
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const openEmail = () => {
    const mailtoLink = `mailto:${myEmail}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="project-container">
      <div style={{ flex: 1 }}></div>
      <div className="project-details-container">
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
