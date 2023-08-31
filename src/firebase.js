// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEAzTHsRxxFfJsgULKoPHP-O-_RRaHMHs",
  authDomain: "realtor-site-8c1a9.firebaseapp.com",
  projectId: "realtor-site-8c1a9",
  storageBucket: "realtor-site-8c1a9.appspot.com",
  messagingSenderId: "332209969713",
  appId: "1:332209969713:web:150fb95b3f0c2845875310",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
