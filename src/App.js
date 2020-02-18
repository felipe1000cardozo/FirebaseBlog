import React, { useState, useEffect } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import firebase from "./firebase";

import GlobalStyle from "./styles/global";

import Home from "./components/Home";
import Header from "./components/Header";

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
      </Switch>
    </BrowserRouter>
  ) : (
    <h1>carregando...</h1>
  );
};

export default App;
