import React, { useState, useEffect } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import firebase from "./firebase";

import GlobalStyle from "./styles/global";

import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import NewPost from "./components/NewPost";

const App = () => {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(resultado => {
      setFirebaseInitialized(resultado);
    });
  }, []);

  return firebaseInitialized !== false ? (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/new" component={NewPost} />
      </Switch>
    </BrowserRouter>
  ) : (
    <h1>carregando...</h1>
  );
};

export default App;
