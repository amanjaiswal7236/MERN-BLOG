// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7b0d8.firebaseapp.com",
  projectId: "mern-blog-7b0d8",
  storageBucket: "mern-blog-7b0d8.appspot.com",
  messagingSenderId: "758557214991",
  appId: "1:758557214991:web:912afd255af36bb456967a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);