import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";

import { New } from "./style";

const NewPost = props => {
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [descricao, setDescricao] = useState("");
  const [alert, setAlert] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!firebase.getCurrent()) {
      props.history.replace("/");
      return null;
    }
  }, []);

  async function cadastrar(e) {
    e.preventDefault();

    if (
      titulo !== "" &&
      imagem !== null &&
      descricao !== "" &&
      imageUrl !== ""
    ) {
      let posts = firebase.app.ref("posts");
      let chave = posts.push().key;
      await posts.child(chave).set({
        titulo,
        imagem: imageUrl,
        descricao,
        autor: localStorage.userName
      });

      props.history.push("/dashboard");
    } else {
      setAlert("Preencha todos os campos");
    }
  }

  const handleFile = async e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/png" || image.type === "image/jpeg") {
        setImagem(image);
        //console.log(imagem);
        setAlert("");
      } else {
        setAlert("Envie uma imagem do tipo PNG ou JPEG");
        setImagem(null);
        return null;
      }
    }
  };

  async function handleUpload() {
    if (imagem) {
      const currentUid = firebase.getCurrentUid();
      const uploadTasks = firebase.storage
        .ref(`images/${currentUid}/${imagem.name}`)
        .put(imagem);

      await uploadTasks.on(
        "state_changed",
        snapshot => {
          //progress
          setProgress(
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
          );
        },
        error => {
          //error
          console.log("Error imagem" + error);
        },
        () => {
          //sucesso
          firebase.storage
            .ref(`images/${currentUid}`)
            .child(imagem.name)
            .getDownloadURL()
            .then(url => {
              setImageUrl(url);
            });
        }
      );
    }
  }

  useEffect(() => {
    handleUpload();
  }, [imagem]);

  return (
    <New>
      <header>
        <Link to="/dashboard">Voltar</Link>
      </header>
      <form onSubmit={cadastrar}>
        <span>{alert}</span>
        <div className="input-file">
          <input type="file" onChange={handleFile} />
          {imageUrl ? (
            <img src={imageUrl} width="250" height="150" alt="Capa do post" />
          ) : (
            <progress value={progress} max="100" />
          )}
        </div>
        <label>Titulo:</label>
        <input
          type="text"
          placeholder="Nome do post"
          value={titulo}
          autoFocus
          onChange={e => setTitulo(e.target.value)}
        />
        <label>Url da imagem:</label>
        <label>Descrição:</label>
        <textarea
          type="text"
          placeholder="Nome do post"
          value={descricao}
          autoFocus
          onChange={e => setDescricao(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </New>
  );
};

export default withRouter(NewPost);
