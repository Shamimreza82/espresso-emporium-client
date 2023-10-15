// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk4eAy-jcZooNmFJTKNsbTMHPa9n_KD20",
  authDomain: "espresso-emporium-133a2.firebaseapp.com",
  projectId: "espresso-emporium-133a2",
  storageBucket: "espresso-emporium-133a2.appspot.com",
  messagingSenderId: "811754835774",
  appId: "1:811754835774:web:f98496e4d57ea16dcba66f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth; 