import React, { useEffect, useState } from "react";

import "./style.css";

import { createData, readData } from "../../utils/fireabase";
import { translate } from "../../utils/translate";
import i18n from "../../utils/translate";
import Button from "../../components/button";
import Project from "../../components/project";
import Header from "../../components/header";
import IconButton from "../../components/icon-button";
import MediaQuery from "react-responsive";

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

  const portifolioControl = (mobile) => {
    return (
      <div className="portfolio-control">
        <IconButton
          iconName="ArrowBack"
          onClick={() => advanceOrDecrementIndex(false)}
          customIconButtonStyle={mobile ? { border: "none", padding: "0px" } : {}}
          customIconStyle={mobile ? { fontSize: "30px" } : {}}
        />
        <IconButton
          iconName="ArrowForward"
          onClick={() => advanceOrDecrementIndex(true)}
          customIconButtonStyle={mobile ? { border: "none", padding: "0px" } : {}}
          customIconStyle={mobile ? { fontSize: "30px" } : {}}
        />
      </div>
    );
  };

  return (
    <div className="main">
      <Header currentPage="portfolio" isDark={false} />
      <MediaQuery maxWidth={700}>{portifolioControl(true)}</MediaQuery>
      {projects[projectIndex] != null && <Project project={projects[projectIndex]} />}
      <MediaQuery minWidth={700}>{portifolioControl(false)}</MediaQuery>
    </div>
  );
}

export default Portfolio;
