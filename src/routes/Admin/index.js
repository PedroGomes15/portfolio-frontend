import React, { useEffect, useState } from "react";

import "./style.css";

import { createData, readData } from "../../utils/fireabase";
import { Await } from "react-router";
import Input from "../../components/input";
import CheckboxGroup from "../../components/checkbox-group";
import initialStacks from "./stacks.json";
import Button from "../../components/button";
import LoginPopup from "../../components/login-popup";

function Admin() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {});

  const addElementToDatabase = async () => {
    const element = {
      name,
      image,
      description,
      stacks: selectedItems,
    };

    let el = await createData("project", element);
  };

  const handleToggleItem = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((item) => item !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  return (
    <LoginPopup></LoginPopup>
    /*<div className="add-element-container">
      <h1>Adicionar Projeto</h1>
      <div className="input-container">
        <Input label="Nome" onChange={(e) => setName(e.target.value)} />
        <Input label="Imagem (url)" onChange={(e) => setImage(e.target.value)} />
        <Input
          label="Descrição"
          onChange={(e) => setDescription(e.target.value)}
          areaInput={true}
        />
        <CheckboxGroup
          items={initialStacks}
          selectedItems={selectedItems}
          onToggle={handleToggleItem}
        />
        <Button text="Adicionar" isDark={true} classNameonClick={addElementToDatabase} />
      </div>
    </div>*/
  );
}

export default Admin;
