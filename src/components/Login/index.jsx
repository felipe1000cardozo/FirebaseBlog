import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";

import { StyledLogin } from "./style";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (firebase.getCurrent()) {
      return props.history.replace("dashboard");
    }
    // eslint-disable-next-line
  }, []);

  function entrar(e) {
    e.preventDefault();
    login();
  }

  async function login() {
    try {
      await firebase.login(email, password).catch(error => {
        if (error.code === "auth/user-not-fount") {
          alert("Este usuario não exite!");
        } else {
          alert("Codigo de erro:" + error.code);
          return null;
        }
      });
      props.history.replace("/dashboard");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  return (
    <StyledLogin>
      <form onSubmit={entrar}>
        <label>Email:</label>
        <input
          type="Email"
          autoComplete="on"
          autoFocus
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="teste@teste.com"
        />

        <label>Senha:</label>
        <input
          autoComplete="on"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Entrar</button>

        <Link to="/register">Ainda não possui uma conta?</Link>
      </form>
    </StyledLogin>
  );
};

export default withRouter(Login);
