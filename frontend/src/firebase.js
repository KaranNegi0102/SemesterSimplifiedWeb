// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your Firebase configuration object (replace with your own config)
const firebaseConfig = {
  apiKey: "AIzaSyBCNKqbwvT2DRzi9gLKEdy9nxF9ozU1X20",
  authDomain: "semester-simplified.firebaseapp.com",
  projectId: "semester-simplified",
  storageBucket: "semester-simplified.appspot.com",
  messagingSenderId: "846706738462",
  appId: "1:846706738462:web:fae97c24f2c700796cf50f",
  measurementId: "G-WEPD7DC5RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };
