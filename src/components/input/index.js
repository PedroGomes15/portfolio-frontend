import React from "react";
import "./style.css";

export default ({ label, type = "text", value, onChange, areaInput, isDark, className = "" }) => {
  return (
    <div className={`my-input ${isDark ? "my-input-dark" : ""} ${className}`}>
      <label>{label}</label>
      {!areaInput ? ( // Usando uma instrução condicional para renderizar input ou textarea
        <input className="my-input-content" type="text" value={value} onChange={onChange} />
      ) : (
        <textarea
          className="my-input-content my-input-content-area"
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};
