// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWUEvE9Q-m9aCXy8EBHKkpcsy6psuBW-4",
  authDomain: "biteme-x07.firebaseapp.com",
  projectId: "biteme-x07",
  storageBucket: "biteme-x07.appspot.com",
  messagingSenderId: "288765735793",
  appId: "1:288765735793:web:7f89cf4cf409f7d7173cd0",
  measurementId: "G-WEZQQBDC83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);