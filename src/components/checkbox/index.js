import React from "react";
import "./style.css";

export default ({ id, label, isChecked, onChange }) => {
  return (
    <label className="checkbox-label">
      <input type="checkbox" id={id} checked={isChecked} onChange={() => onChange(id)} />
      <p>{label}</p>
    </label>
  );
};
