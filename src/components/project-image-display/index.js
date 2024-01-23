import React, { useState } from "react";

import "./style.css";

const DisplayImage = ({ src, setMainImage }) => {
  return (
    <div className={`image-container `} onClick={() => setMainImage(src)}>
      <img className="project-portifolio-image" src={src} alt={`portifolio_${src}`} />
    </div>
  );
};

export default DisplayImage;
