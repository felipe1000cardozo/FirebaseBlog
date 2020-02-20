import React, { useState } from "react";
import firebase from "../../firebase";
import { withRouter } from "react-router-dom";

import { RegisterForm, RegisterTitle } from "./style";

const Register = props => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function register(e) {
    e.preventDefault();

    onRegister();
  }

  async function onRegister() {
    try {
      await firebase.register(nome, email, password);
      props.history.replace("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <RegisterTitle>Novo Usuario</RegisterTitle>
      <RegisterForm onSubmit={register}>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          autoFocus
          autoComplete="off"
          onChange={e => setNome(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          autoComplete="off"
          onChange={e => setEmail(e.target.value)}
        />
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          autoComplete="off"
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </RegisterForm>
    </div>
  );
};

export default withRouter(Register);
