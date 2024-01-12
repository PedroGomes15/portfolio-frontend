import React, { useState } from "react";
import "./style.css";
import Button from "../button";
import { translate } from "../../utils/translate";
import MediaQuery from "react-responsive";
import ProjectImage from "./project-image";
import ProjectGame from "./project-game";

const Project = ({ project }) => {
  const [isClicked, setIsClicked] = useState(false);

  const isImage = () => {
    const imageExtensions = [".jpeg", ".jpg", ".gif", ".png"];
    return project.image && imageExtensions.some((ext) => project.image.includes(ext));
  };

  return (
    <div className={`project-container ${isClicked ? "clicked" : ""}`}>
      <MediaQuery minWidth={700}>
        <div style={{ flex: 1 }}></div>
      </MediaQuery>
      {isImage() ? (
        <ProjectImage project={project} setIsClicked={() => setIsClicked(!isClicked)} />
      ) : (
        <ProjectGame project={project} />
      )}
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
