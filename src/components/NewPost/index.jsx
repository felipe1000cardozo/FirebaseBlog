import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

const NewPost = () => {
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <div>
      <header>
        <Link></Link>
      </header>
      <form action="">
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
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default withRouter(NewPost);
