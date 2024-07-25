// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGZcNfPljEd6tRTwPH1r_A69VhmTgxS0o",
  authDomain: "job-portal-demo-ad8a6.firebaseapp.com",
  projectId: "job-portal-demo-ad8a6",
  storageBucket: "job-portal-demo-ad8a6.appspot.com",
  messagingSenderId: "242029163570",
  appId: "1:242029163570:web:0ef0d8046ea7ca0996b82b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;