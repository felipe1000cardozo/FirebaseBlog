import React, { useState, useEffect } from "react";
import firebase from "../../firebase";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firebase.app.ref("posts").once("value", snapshot => {
      let newPosts = [];

      snapshot.forEach(childItem => {
        newPosts.push({
          key: childItem.key,
          titulo: childItem.val().titulo,
          imagem: childItem.val().imagem,
          descricao: childItem.val().descricao,
          autor: childItem.val().autor
        });
      });

      setPosts(newPosts);
    });
  }, []);

  return (
    <section>
      {posts.map(post => {
        return (
          <article key={post.key}>
            <header>
              <div>
                <strong>{post.titulo}</strong>
                <span>Autor: {post.autor}</span>
              </div>
            </header>
            <img src={post.imagem} alt="Capa do post" />
            <footer>
              <p>{post.descricao}</p>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Home;
