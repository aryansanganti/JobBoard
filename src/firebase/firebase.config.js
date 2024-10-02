// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOpmAZXAbQTzgg7OTuL4f2BC5Z3oinOas",
  authDomain: "job-board-ebe07.firebaseapp.com",
  projectId: "job-board-ebe07",
  storageBucket: "job-board-ebe07.appspot.com",
  messagingSenderId: "857861260545",
  appId: "1:857861260545:web:d8cc955e03872193af8700",
  measurementId: "G-BE89K2KWE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;