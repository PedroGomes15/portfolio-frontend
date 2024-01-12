import React, { useState } from "react";
import "./style.css";

import Pong from "../../../games/pong";

function ProjectGame({ project }) {
  return (
    <div className="project-details-container">
      <Pong height={600}></Pong>
    </div>
  );
}

export default ProjectGame;
