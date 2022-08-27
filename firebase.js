// import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
// import { getAuth } from "firebase/auth";

// import "firebase/auth";
// require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyC1D-w-uH41-N-E3IMgrUA7rzRd17s76p4",
  authDomain: "home-movies-nextjs.firebaseapp.com",
  projectId: "home-movies-nextjs",
  storageBucket: "home-movies-nextjs.appspot.com",
  messagingSenderId: "156399641124",
  appId: "1:156399641124:web:8ef4397f8cef78f7c36eb1",
  measurementId: "G-7QXMNDFD4S",
  databaseURL:
    "https://home-movies-nextjs-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
