import React, { useEffect } from "react";
import Header from "../../components/header";
import { translate } from "../../utils/translate";
import "./style.css";
import MediaQuery from "react-responsive";

function About() {
  useEffect(() => {
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue(
      "--background-white-color"
    );
    document.body.style.backgroundColor = bgColor;
  }, []);

  return (
    <div className="main">
      <Header currentPage="about" isDark={true} />
      <div className="about-container">
        <MediaQuery minWidth={700}>
          <p className="about-text-name">PEDRO GOMES</p>
        </MediaQuery>
        <p className="about-text-content">{translate("about-text")}</p>
        <div className="about-image-container">
          <img
            className="about-image"
            src="/images/pedro-gomes-about.jpg"
            alt="Descrição da imagem"
          />
          <div className="vertical-line" />
        </div>
      </div>
    </div>
  );
}

export default About;
