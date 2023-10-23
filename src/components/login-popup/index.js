import React, { useState } from "react";

import "./style.css";

import Input from "../input";
import Button from "../button";
import { login } from "../../controller/userController";

const LoginPopup = ({ handleLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const l = await login(username, password);
    handleLoginSuccess(l);
  };

  return (
    <div className="login-popup">
      <h2>Login</h2>
      <Input label="Username" value={username} onChange={handleUsernameChange} />
      <Input label="Password" type="password" value={password} onChange={handlePasswordChange} />
      <Button text="Submit" onClick={handleLogin} isDark={true} />
    </div>
  );
};

export default LoginPopup;
