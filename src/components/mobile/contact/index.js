import React from "react";
import "./style.css"; // Importe o arquivo CSS
import Button from "../../button";
import { translate } from "../../../utils/translate";
import MediaQuery from "react-responsive";

const myEmail = "pedro.armando15@hotmail.com";

export default () => {
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const openEmail = () => {
    const mailtoLink = `mailto:${myEmail}`;
    window.location.href = mailtoLink;
  };

  const ResponsiveButton = ({ text, onClick, icon }) => (
    <Button
      text={text}
      onClick={onClick}
      style={{ display: "flex", alignItems: "center" }}
      icon={icon}
    />
  );

  return (
    <div className="container-mobile">
      <div className="contact-text-main-mobile">
        <p className="text-small-mobile">{translate("contact-menu-haveProject")}</p>
        <p className="text-large-mobile">{translate("contact-menu-getInTouch")}</p>
      </div>
      <div className="contact-links-mobile">
        <ResponsiveButton
          text="LINKEDIN"
          onClick={() => openLinkInNewTab("https://www.linkedin.com/in/pedroarmandogomes/")}
          icon="LinkedIn"
        ></ResponsiveButton>
        <ResponsiveButton text="E-MAIL" onClick={openEmail} icon="Email"></ResponsiveButton>
        <ResponsiveButton
          text="GITHUB"
          onClick={() => openLinkInNewTab("https://github.com/PedroGomes15")}
          icon="GitHub"
        ></ResponsiveButton>
      </div>
      <div className="footer" style={{ alignContent: "flex-end" }}>
        <p>{translate("footer-menu-available")} </p>
      </div>
    </div>
  );
};
