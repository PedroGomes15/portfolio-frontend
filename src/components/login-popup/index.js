import React, { useState } from "react";

import "./style.css";

import Input from "../input";
import Button from "../button";

const LoginPopup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    // Verifique o nome de usuário e senha e realize a ação apropriada
  };

  return (
    <div className="login-popup">
      <h2>Login</h2>
      <Input label="Username" value={username} onChange={handleUsernameChange} />
      <Input label="Password" value={password} onChange={handlePasswordChange} />
      <Button text="Submit" onClick={handleLogin} isDark={true} />
    </div>
  );
};

export default LoginPopup;
