import React from "react";
import "./style.css";

export default ({ text, onClick, selected, isDark, className }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className={`my-button ${className} ${isDark ? "my-button-dark" : ""}`}
      onClick={handleClick}
      disabled={selected}
    >
      {text}
    </button>
  );
};
