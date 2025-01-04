// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbYwapHTXwMdZ2aa4dwpZNCDfYBArg9SU",
  authDomain: "salinmedialive.firebaseapp.com",
  projectId: "salinmedialive",
  storageBucket: "salinmedialive.firebasestorage.app",
  messagingSenderId: "55452145027",
  appId: "1:55452145027:web:ffe11aad781dd8a5cb92b6",
  measurementId: "G-7LL6TXT0TV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Ensure this line exists
