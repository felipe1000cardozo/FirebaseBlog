import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";

import { StyledDashboard } from "./style";

const Dashboard = props => {
  const [nome, setNome] = useState(localStorage.userName);

  async function logout() {
    await firebase.logout().catch(error => console.log(error));
    localStorage.removeItem("userName");
    props.history.push("/");
  }

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
    // eslint-disable-next-line
  }, []);

  return (
    <StyledDashboard>
      <div className="user-info">
        <h1>Ola {nome}</h1>
        <Link to="/dashboard/new">Novo Post</Link>
      </div>
      <p>Logado com {firebase.getCurrent()}</p>
      <button onClick={() => logout()}>Deslogar</button>
    </StyledDashboard>
  );
};

export default withRouter(Dashboard);
