// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8-v5bkHzHqt0T7d9bm3ylee0Wz3tdIAw",
  authDomain: "driftly-1.firebaseapp.com",
  projectId: "driftly-1",
  storageBucket: "driftly-1.appspot.com",
  messagingSenderId: "439286166504",
  appId: "1:439286166504:web:6c3f8bf116557391836a5d",
  measurementId: "G-TVWYJN3RWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
