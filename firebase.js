import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDRHjN5AmkTlQVp6UftQxa3AMbZuNu4Zbo",
  authDomain: "whatsup-c5875.firebaseapp.com",
  projectId: "whatsup-c5875",
  storageBucket: "whatsup-c5875.appspot.com",
  messagingSenderId: "1052523007474",
  appId: "1:1052523007474:web:5b1be7b6cbe88b3e392f6b"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };