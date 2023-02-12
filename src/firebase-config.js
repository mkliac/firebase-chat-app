// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYbMNBRzwhhFTqUJ2K-ZHHEY4BK3FWQPA",
  authDomain: "fir-practice-chat-app-6c9b5.firebaseapp.com",
  projectId: "fir-practice-chat-app-6c9b5",
  storageBucket: "fir-practice-chat-app-6c9b5.appspot.com",
  messagingSenderId: "281550007119",
  appId: "1:281550007119:web:decd2e1db06a71f75c733a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);