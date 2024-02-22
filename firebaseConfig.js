// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrYEQeszqYxyaXOvWm2jma4Z0d9NBzYK8",
  authDomain: "word-game-5a4ca.firebaseapp.com",
  projectId: "word-game-5a4ca",
  storageBucket: "word-game-5a4ca.appspot.com",
  messagingSenderId: "580040737365",
  appId: "1:580040737365:web:c490ccdd4bf94586c0cadc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
