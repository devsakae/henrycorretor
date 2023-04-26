// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFMpL1_NFn5NpNN41Kw41AstYDwThHlX0",
  authDomain: "henry-corretor-e368d.firebaseapp.com",
  projectId: "henry-corretor-e368d",
  storageBucket: "henry-corretor-e368d.appspot.com",
  messagingSenderId: "326317151434",
  appId: "1:326317151434:web:12b8c86603f8b4cfc6d033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();