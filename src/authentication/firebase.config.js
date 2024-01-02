// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCsAATQT_WEEUHIVpCl1rgVzPM2gdhus-o",
  authDomain: "halal-jibika-app.firebaseapp.com",
  projectId: "halal-jibika-app",
  storageBucket: "halal-jibika-app.appspot.com",
  messagingSenderId: "1020867394447",
  appId: "1:1020867394447:web:10357917457dc55ab7e9fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;