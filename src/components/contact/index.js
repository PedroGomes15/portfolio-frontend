import React from "react";
import "./style.css"; // Importe o arquivo CSS
import Button from "../button";
import { translate } from "../../utils/translate";

const myEmail = "pedro.armando15@hotmail.com";

export default () => {
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const openEmail = () => {
    const mailtoLink = `mailto:${myEmail}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="container">
      <p className="text-small">{translate("contact-menu-haveProject")}</p>
      <p className="text-large">{translate("contact-menu-getInTouch")}</p>
      <div className="contact-links">
        <Button
          text="LINKEDIN"
          onClick={() => openLinkInNewTab("https://www.linkedin.com/in/pedroarmandogomes/")}
        />
        <Button text="E-MAIL" onClick={openEmail} />
        <Button text="GITHUB" onClick={() => openLinkInNewTab("https://github.com/PedroGomes15")} />
      </div>
    </div>
  );
};
