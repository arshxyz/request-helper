import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7AGFM7jtG-SOxGUXQInPl6Er99dSLQlY",
  authDomain: "curlbin-arsh.firebaseapp.com",
  projectId: "curlbin-arsh",
  storageBucket: "curlbin-arsh.appspot.com",
  messagingSenderId: "906211009616",
  appId: "1:906211009616:web:30b328df7b2df0b6fadd55",
  measurementId: "G-8ZXJ2B1ZK1",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
