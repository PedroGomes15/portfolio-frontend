import React, { useEffect, useState } from "react";
import "./style.css";
import { translate } from "../../utils/translate";
import i18n from "../../utils/translate";
import Button from "../../components/button";
import Contact from "../../components/contact";
import { useNavigate } from "react-router-dom";
import IconButton from "../../components/icon-button";

const langs = ["ptbr", "en"];

function Header({ currentPage, isDark }) {
  const [currentLangIndex, setCurrentLangIndex] = useState(0);

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
          <IconButton
            iconName="Undo"
            onClick={() => redirectTo("")}
            isDark={isDark}
            customIconStyle={{ transform: "rotate(30deg)" }}
          />
        );
      case "portfolio":
        return (
          <Button text={"PEDRO GOMES"} onClick={() => redirectTo("")} className="header-name" />
        );
      default:
        return <p className="header-name">PEDRO GOMES</p>;
    }
  };

  return (
    <div className={`header ${isDark ? "dark" : ""}`}>
      <div className="header-name-button">{renderNameButton()}</div>

      <div className="header-menu">
        <Button
          text={translate("header-menu-portfolio")}
          onClick={() => redirectTo("portfolio")}
          selected={currentPage == "portfolio"}
          isDark={isDark}
        />
        <Button
          text={translate("header-menu-aboutme")}
          onClick={() => redirectTo("about")}
          selected={currentPage == "about"}
          isDark={isDark}
        />
      </div>
      <div className="header-language">
        <Button text={translate("header-menu-language")} onClick={changeLanguage} isDark={isDark} />
      </div>
    </div>
  );
}

export default Header;
