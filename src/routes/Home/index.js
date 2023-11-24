import React, { useEffect, useState } from "react";
import "./style.css";
import { translate } from "../../utils/translate";
import i18n from "../../utils/translate";
import Button from "../../components/button";
import Contact from "../../components/contact";
import ContactMobile from "../../components/mobile/contact";
import Header from "../../components/header";
import MediaQuery from "react-responsive";

function Home() {
  useEffect(() => {
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue("--black");
    document.body.style.backgroundColor = bgColor;
  }, []);
  return (
    <div className="main">
      <Header currentPage="home" isDark={false} />
      <MediaQuery minWidth={700}>
        {(matches) => (matches ? <Contact /> : <ContactMobile />)}
      </MediaQuery>
      <MediaQuery minWidth={700}>
        {(matches) =>
          matches ? (
            <div className="footer">
              <p>{translate("footer-menu-available")} </p>
            </div>
          ) : null
        }
      </MediaQuery>
    </div>
  );
}

export default Home;
