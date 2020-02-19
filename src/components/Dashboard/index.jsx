import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";

const Dashboard = props => {
  const [nome, setNome] = useState(localStorage.userName);
  const [userEmail, setUserEmail] = useState("");

  function logout() {}

  useEffect(() => {
    async function getLoginStatus() {
      if (!firebase.getCurrent()) {
        props.history.replace("/login");
        return null;
      }

      firebase.getUserName(info => {
        localStorage.userName = info.val().nome;
        setNome(localStorage.userName);
      });
    }

    getLoginStatus();
  }, []);

  return (
    <div>
      <div>
        <h1>Ola {nome}</h1>
        <Link to="/dashboard/new">Novo Post</Link>
      </div>
      <p>Logado com {userEmail}</p>
      <button onClick={() => logout()}>Deslogar</button>
    </div>
  );
};

export default withRouter(Dashboard);
