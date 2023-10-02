// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8YNlb8llvKW5zPVXEXEiGi-s2jVqdJts",
  authDomain: "auth-dragon-news-1c669.firebaseapp.com",
  projectId: "auth-dragon-news-1c669",
  storageBucket: "auth-dragon-news-1c669.appspot.com",
  messagingSenderId: "550575014300",
  appId: "1:550575014300:web:19bbfebbacd897689c4859",
  measurementId: "G-6NGV8HNW5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export const auth = getAuth(app);
