import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "portfolio-projects-7e80c.firebaseapp.com",
  projectId: "portfolio-projects-7e80c",
  storageBucket: "portfolio-projects-7e80c.appspot.com",
  messagingSenderId: "1080577525655",
  appId: "1:1080577525655:web:2fb392f415c082883926d2",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
