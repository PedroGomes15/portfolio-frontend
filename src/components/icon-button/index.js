import React from "react";
import "./style.css";
import * as MuiIcons from "@mui/icons-material";

export default ({ iconName, onClick, isDark, customIconButtonStyle, customIconStyle }) => {
  const handleClick = () => {
    onClick();
  };

  const getIcon = () => {
    const Icon = MuiIcons[iconName];
    return <Icon className="icon-button-content" style={customIconStyle} />;
  };

  return (
    <div
      className={`icon-button ${isDark ? "icon-button-dark" : ""}`}
      onClick={handleClick}
      style={customIconButtonStyle}
    >
      {getIcon()}
    </div>
  );
};
