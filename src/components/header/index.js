import React, { useEffect, useState } from "react";
import "./style.css";
import { translate } from "../../utils/translate";
import i18n from "../../utils/translate";
import Button from "../../components/button";
import Contact from "../../components/contact";
import { useNavigate } from "react-router-dom";
import IconButton from "../../components/icon-button";
import MediaQuery from "react-responsive";

const langs = ["ptbr", "en"];

function Header({ currentPage, isDark }) {
  const [currentLangIndex, setCurrentLangIndex] = useState(0);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [headerMobileDark, setHeaderMobileDark] = useState(isDark);

  const navigate = useNavigate();

  const changeLanguage = () => {
    setCurrentLangIndex((prevIndex) => (prevIndex + 1) % langs.length);
    const newLang = langs[currentLangIndex];
    i18n.changeLanguage(newLang);
  };

  const redirectTo = (route) => {
    navigate(`/${route}`);
  };

  const renderNameButton = () => {
    switch (currentPage) {
      case "about":
        return (
          <MediaQuery maxWidth={700}>
            {(matches) =>
              matches ? (
                <Button
                  text={"PEDRO GOMES"}
                  onClick={() => redirectTo("")}
                  className="header-name"
                  isDark={headerMobileDark}
                />
              ) : (
                <IconButton
                  iconName="Undo"
                  onClick={() => redirectTo("")}
                  isDark={isDark}
                  customIconStyle={{ transform: "rotate(30deg)" }}
                />
              )
            }
          </MediaQuery>
        );
      case "portfolio":
        return (
          <Button text={"PEDRO GOMES"} onClick={() => redirectTo("")} className="header-name" />
        );
      default:
        return <p className="header-name">PEDRO GOMES</p>;
    }
  };

  const renderMenuButton = (textToTranslate, page, redirectPage) => {
    return (
      <Button
        text={translate(textToTranslate)}
        onClick={() => redirectTo(redirectPage || page)}
        selected={currentPage == page}
        isDark={headerMobileDark}
      />
    );
  };

  return (
    <div className={`header ${isDark ? "dark" : ""}`}>
      <div className="header-name-button">{renderNameButton()}</div>

      <MediaQuery minWidth={700}>
        {(matches) =>
          matches ? (
            <>
              <div className="header-menu">
                {renderMenuButton("header-menu-portfolio", "portfolio")}
                {renderMenuButton("header-menu-aboutme", "about")}
              </div>
              <div className="header-language">
                <Button
                  text={translate("header-menu-language")}
                  onClick={changeLanguage}
                  isDark={isDark}
                />
              </div>
            </>
          ) : (
            <>
              <div
                className={`header-menu-mobile ${
                  shouldAnimate ? (menuIsOpen ? "visible" : "hidden") : ""
                }`}
              >
                <div className={"header-menu-mobile-flex-container"}></div>
                {renderMenuButton("header-menu-home", "home", " ")}
                {renderMenuButton("header-menu-portfolio", "portfolio")}
                {renderMenuButton("header-menu-aboutme", "about")}
                <Button text={translate("header-menu-language")} onClick={changeLanguage} />
                <div className={"header-menu-mobile-flex-container"}>
                  <p className="header-menu-available-mobile">
                    {translate("footer-menu-available")}
                  </p>
                </div>
              </div>
              <IconButton
                iconName={menuIsOpen ? "Close" : "Menu"}
                customIconButtonStyle={{ border: "none", padding: "0px", zIndex: "102" }}
                customIconStyle={{ fontSize: "40px" }}
                isDark={headerMobileDark}
                onClick={() => {
                  if (isDark == true) {
                    setHeaderMobileDark(!headerMobileDark);
                  }
                  setMenuIsOpen(!menuIsOpen);
                  setShouldAnimate(true);
                }}
              />
            </>
          )
        }
      </MediaQuery>
    </div>
  );
}

export default Header;
