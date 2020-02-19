import app from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyDnmRdD_r5uD6rZC5VpV584R62hQggZG9s",
  authDomain: "blog-5052b.firebaseapp.com",
  databaseURL: "https://blog-5052b.firebaseio.com",
  projectId: "blog-5052b",
  storageBucket: "blog-5052b.appspot.com",
  messagingSenderId: "598987781015",
  appId: "1:598987781015:web:ec4759ce6f03fa15d04ad2",
  measurementId: "G-681STHNBV0"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.app = app.database();
  }

  login(email, password) {
    return app.auth().signInWithEmailAndPassword(email, password);
  }

  async register(nome, email, password) {
    await app.auth().createUserWithEmailAndPassword(email, password);

    const uid = app.auth().currentUser.uid;

    return app
      .database()
      .ref("usuarios")
      .child(uid)
      .set({
        nome: nome
      });
  }

  isInitialized() {
    return new Promise(resolve => {
      app.auth().onAuthStateChanged(resolve);
    });
  }

  getCurrent() {
    return app.auth().currentUser && app.auth().currentUser.email;
  }

  async getUserName(callback) {
    if (!app.auth().currentUser) {
      return null;
    }

    const uid = app.auth().currentUser.uid;
    await app
      .database()
      .ref("usuarios")
      .child(uid)
      .once("value")
      .then(callback);
  }
}

export default new Firebase();
