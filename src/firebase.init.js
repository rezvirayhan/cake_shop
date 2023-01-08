// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS-ka1Oj-XtQMY5fZ0_CHSyaQ-_8HoTrM",
  authDomain: "cake-shop-bd.firebaseapp.com",
  projectId: "cake-shop-bd",
  storageBucket: "cake-shop-bd.appspot.com",
  messagingSenderId: "665870499298",
  appId: "1:665870499298:web:c5e1b2322c209bd8ca0dbb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
