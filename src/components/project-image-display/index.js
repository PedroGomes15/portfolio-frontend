import React, { useState } from "react";

import "./style.css";

const DisplayImage = ({ src }) => {
  const [fullscreen, setFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <div className={`image-container `} onClick={toggleFullscreen}>
      <img className="project-portifolio-image" src={src} alt={`portifolio_${src}`} />
      {fullscreen && (
        <div
          className={`fullscreen-overlay ${fullscreen ? "fullscreen" : ""}`}
          onClick={toggleFullscreen}
        >
          <img
            className={`fullscreen-image ${fullscreen ? "fullscreen" : ""}`}
            src={src}
            alt={`portifolio_${src}`}
          />
        </div>
      )}
    </div>
  );
};

export default DisplayImage;
