// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1jDgbBb0OczEjMYToSS9LCKFRtEuo7Po",
  authDomain: "blog-post-ciccc.firebaseapp.com",
  projectId: "blog-post-ciccc",
  storageBucket: "blog-post-ciccc.appspot.com",
  messagingSenderId: "281955421657",
  appId: "1:281955421657:web:304a31924ee4f84bee1dc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();