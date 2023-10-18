import React, { useEffect, useState } from "react";
import "./style.css";
import { translate } from "../../utils/translate";
import i18n from "../../utils/translate";
import Button from "../../components/button";
import Contact from "../../components/contact";
import Header from "../../components/header";

function Home() {
  useEffect(() => {
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue("--black");
    document.body.style.backgroundColor = bgColor;
  }, []);
  return (
    <div className="main">
      <Header />
      <Contact />
      <div className="footer">
        <p>{translate("footer-menu-available")} </p>
      </div>
    </div>
  );
}

export default Home;
