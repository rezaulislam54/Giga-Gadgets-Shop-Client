// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYpqqvTre6dsbjgCquMvs_hM6elhfVlKs",
  authDomain: "giga-gadgets-shop.firebaseapp.com",
  projectId: "giga-gadgets-shop",
  storageBucket: "giga-gadgets-shop.appspot.com",
  messagingSenderId: "283519869354",
  appId: "1:283519869354:web:da66b4453c267bdaac0bd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;