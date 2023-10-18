import React from "react";
import Checkbox from "../checkbox";
import "./style.css";

const CheckboxGroup = ({ items, selectedItems, onToggle }) => {
  const categories = {};

  items.forEach((item) => {
    if (!categories[item.stack]) {
      categories[item.stack] = [];
    }
    categories[item.stack].push(item);
  });

  return (
    <div className="checkbox-group">
      {Object.keys(categories).map((category) => (
        <div key={category} className="category-column">
          <h2>{category}</h2>
          {categories[category].map((item) => (
            <Checkbox
              key={item.id}
              id={item.id}
              label={item.label}
              isChecked={selectedItems.includes(item.id)}
              onChange={onToggle}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
