import React, { useEffect, useState } from "react";

import "./style.css";

import { createData, readData } from "../../utils/fireabase";
import { translate } from "../../utils/translate";
import i18n from "../../utils/translate";
import Button from "../../components/button";
import Project from "../../components/project";
import Header from "../../components/header";
import IconButton from "../../components/icon-button";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue("--black");
    document.body.style.backgroundColor = bgColor;

    async function fetchData() {
      const projectData = await readData("project");
      setProjects(projectData);
    }

    fetchData();
  }, []);

  const advanceOrDecrementIndex = (advance) => {
    setProjectIndex(
      advance
        ? (projectIndex + 1) % projects.length
        : (projectIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="main">
      <Header currentPage="portfolio" />
      {projects[projectIndex] != null && <Project project={projects[projectIndex]} />}
      <div className="portfolio-control">
        <IconButton iconName="ArrowBack" onClick={() => advanceOrDecrementIndex(false)} />
        <IconButton iconName="ArrowForward" onClick={() => advanceOrDecrementIndex(true)} />
      </div>
    </div>
  );
}

export default Portfolio;
