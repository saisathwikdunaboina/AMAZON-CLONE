// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBiumRu1pzh--MrNwbO5siptvsYrLdPdUA",
    authDomain: "clone-c7acf.firebaseapp.com",
    projectId: "clone-c7acf",
    storageBucket: "clone-c7acf.appspot.com",
    messagingSenderId: "339989554080",
    appId: "1:339989554080:web:83deca7993d98c2bf4bac5",
    measurementId: "G-WDG38G13XW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};
