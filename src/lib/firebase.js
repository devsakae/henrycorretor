import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "henry-corretor-e368d.firebaseapp.com",
  projectId: "henry-corretor-e368d",
  storageBucket: "henry-corretor-e368d.appspot.com",
  messagingSenderId: "326317151434",
  appId: "1:326317151434:web:12b8c86603f8b4cfc6d033",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);