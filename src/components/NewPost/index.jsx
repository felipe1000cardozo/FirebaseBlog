import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";

import { New } from "./style";

const NewPost = props => {
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");
  const [alert, setAlert] = useState("");

  useEffect(() => {
    if (!firebase.getCurrent()) {
      props.history.replace("/");
      return null;
    }
  }, []);

  async function cadastrar(e) {
    e.preventDefault();

    if (titulo !== "" && imagem !== "" && descricao !== "") {
      let posts = firebase.app.ref("posts");
      let chave = posts.push().key;
      await posts.child(chave).set({
        titulo,
        imagem,
        descricao,
        autor: localStorage.userName
      });

      props.history.push("/dashboard");
    } else {
      setAlert("Preencha todos os campos");
    }
  }

  return (
    <New>
      <header>
        <Link to="/dashboard">Voltar</Link>
      </header>
      <form onSubmit={cadastrar}>
        <span>{alert}</span>
        <label>Titulo:</label>
        <input
          type="text"
          placeholder="Nome do post"
          value={titulo}
          autofocus
          onChange={e => setTitulo(e.target.value)}
        />
        <label>Url da imagem:</label>
        <input
          type="text"
          placeholder="Url da capa"
          value={imagem}
          onChange={e => setImagem(e.target.value)}
        />
        <label>Descrição:</label>
        <textarea
          type="text"
          placeholder="Nome do post"
          value={descricao}
          autofocus
          onChange={e => setDescricao(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </New>
  );
};

export default withRouter(NewPost);
