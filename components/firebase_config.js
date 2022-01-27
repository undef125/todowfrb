import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBAr1DuiNBL0F4ED7mFLaA-5y3nKFdQ5EQ",
    authDomain: "todo-57f6f.firebaseapp.com",
    projectId: "todo-57f6f",
    storageBucket: "todo-57f6f.appspot.com",
    messagingSenderId: "746446310743",
    appId: "1:746446310743:web:347ff3d55423155e5ec212",
    measurementId: "G-J7E1C4CYWP"
  };


  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } 
// !firebase.apps.length ? firebaseinitializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore();

export  {db};