import React, { useEffect, useState } from "react";

import "./style.css";

import { readData } from "../../utils/fireabase";
import { Await } from "react-router";
import Input from "../../components/input";
import CheckboxGroup from "../../components/checkbox-group";
import initialStacks from "./stacks.json";
import Button from "../../components/button";
import LoginPopup from "../../components/login-popup";
import Cookies from "js-cookie";
import { newProject } from "../../controller/dataController";
import { validToken } from "../../controller/tokenController";

function Admin() {
  const [hasToken, setHasToken] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [descriptionEn, setDescriptionEn] = useState("");
  const [descriptionPtbr, setDescriptionPtbr] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    async function validadeToken(params) {
      const token = Cookies.get("pedroToken");

      if (token) {
        const isValidToken = await validToken(token);
        if (isValidToken) {
          setHasToken(true);
        } else {
          Cookies.remove("pedroToken");
          setHasToken(false);
        }
      }
    }

    validadeToken();
  }, []);

  const addElementToDatabase = async () => {
    const selectedLabels = selectedItems
      .map((id) => initialStacks.find((data) => data.id === id)?.label)
      .filter((label) => label)
      .sort();

    const element = {
      name,
      image,
      descriptionEn,
      descriptionPtbr,
      stacks: selectedLabels,
    };

    let el = await newProject(element);

    setName("");
    setImage("");
    setDescriptionEn("");
    setDescriptionPtbr("");
    setSelectedItems([]);
  };

  const handleToggleItem = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((item) => item !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  return hasToken ? (
    <div className="add-element-container">
      <h1>Adicionar Projeto</h1>
      <div className="input-container">
        <Input label="Nome" onChange={(e) => setName(e.target.value)} value={name} />
        <Input label="Imagem (url)" onChange={(e) => setImage(e.target.value)} value={image} />
        <div className="add-element-description-container">
          <Input
            label="Description (EN)"
            onChange={(e) => setDescriptionEn(e.target.value)}
            areaInput={true}
            value={descriptionEn}
          />
          <Input
            label="Descrição (PtBr)"
            onChange={(e) => setDescriptionPtbr(e.target.value)}
            areaInput={true}
            value={descriptionPtbr}
          />
        </div>
        <CheckboxGroup
          items={initialStacks}
          selectedItems={selectedItems}
          onToggle={handleToggleItem}
        />
        <Button text="Adicionar" isDark={true} onClick={addElementToDatabase} />
      </div>
    </div>
  ) : (
    <LoginPopup handleLoginSuccess={(suc) => setHasToken(suc)} />
  );
}

export default Admin;
