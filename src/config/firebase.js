// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUNbfg0T6WpSSkN557Xp7_I6swvl5JhRQ",
  authDomain: "fir-init-ff354.firebaseapp.com",
  projectId: "fir-init-ff354",
  storageBucket: "fir-init-ff354.firebasestorage.app",
  messagingSenderId: "780350802024",
  appId: "1:780350802024:web:3c55a35a407751c71ed3dd",
  measurementId: "G-7V97XN13YJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);