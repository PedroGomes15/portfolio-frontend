import React from "react";
import "./style.css";
import IconButton from "../icon-button";

export default ({ text, onClick, selected, isDark, className, icon }) => {
  const handleClick = () => {
    if (!onClick) return;
    onClick();
  };

  return (
    <div className="button-container">
      {icon && (
        <IconButton
          iconName={icon}
          customIconButtonStyle={{ border: "none", padding: "0px", height: "0px" }}
          customIconStyle={{ fontSize: "15px" }}
        />
      )}
      <button
        className={`my-button ${className || ""} ${isDark ? "my-button-dark" : ""}`}
        onClick={handleClick}
        disabled={selected}
      >
        {text}
      </button>
    </div>
  );
};
