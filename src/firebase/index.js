// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHFlcHpFZuW4tGCdjorYUGK3fvp4SWb_s",
  authDomain: "invoicex-4befc.firebaseapp.com",
  projectId: "invoicex-4befc",
  storageBucket: "invoicex-4befc.appspot.com",
  messagingSenderId: "668247406742",
  appId: "1:668247406742:web:ae800b28903aaa177d2ab7",
  measurementId: "G-PZFJE0Z4JV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth };
