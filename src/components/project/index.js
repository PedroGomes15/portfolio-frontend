import React, { useState, useEffect } from "react";
import "./style.css";
import Button from "../button";
import { translate } from "../../utils/translate";
import MediaQuery from "react-responsive";
import DisplayImage from "../project-image-display";

const Project = ({ project }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [mainImage, setMainImage] = useState(project.images[0]);

  useEffect(() => {
    setMainImage(project.images[0]);
  }, [project]);

  return (
    <div className={`project-container ${isClicked ? "clicked" : ""}`}>
      <MediaQuery minWidth={700}>
        <div style={{ flex: 1 }}></div>
      </MediaQuery>
      <div className="project-details-container" onClick={() => setIsClicked(!isClicked)}>
        <div className="project-content-overlay"></div>
        <img className="project-image" src={mainImage} alt={project.name} />
        <div className="project-content-description fadeIn-top">
          {project[translate("project-description-json")].split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <p className="project-name">{project.name}</p>
      </div>
      <div className="project-images">
        {project.images
          .filter((src) => src !== mainImage)
          .map((src, index) => (
            <DisplayImage
              src={src}
              key={index}
              setMainImage={(src) => setMainImage(src)}
            ></DisplayImage>
          ))}
      </div>
    </div>
  );
};

export default Project;
