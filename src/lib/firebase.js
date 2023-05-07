import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "henry-corretor-7c873.firebaseapp.com",
  projectId: "henry-corretor-7c873",
  storageBucket: "henry-corretor-7c873.appspot.com",
  messagingSenderId: "506474453331",
  appId: "1:506474453331:web:2b5a0b74ac5499337169a6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);