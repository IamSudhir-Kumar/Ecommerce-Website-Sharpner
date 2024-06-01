// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfRfLSVLn86wNBt9Go5gmnxm9NQzcPWq8",
  authDomain: "assignment-14ae6.firebaseapp.com",
  databaseURL: "https://assignment-14ae6-default-rtdb.firebaseio.com",
  projectId: "assignment-14ae6",
  storageBucket: "assignment-14ae6.appspot.com",
  messagingSenderId: "453529565392",
  appId: "1:453529565392:web:3d867a26bcc6bcfa5a46d5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
