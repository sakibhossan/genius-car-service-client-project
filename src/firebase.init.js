// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFas2IK2x9Sxp3mOjF5j6-yj0WozzNbC8",
  authDomain: "genius-car-services-be30c.firebaseapp.com",
  projectId: "genius-car-services-be30c",
  storageBucket: "genius-car-services-be30c.appspot.com",
  messagingSenderId: "291353362653",
  appId: "1:291353362653:web:181db020176389dc7e1b34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

