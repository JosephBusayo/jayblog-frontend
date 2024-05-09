// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-mern-d5f82.firebaseapp.com",
  projectId: "blog-mern-d5f82",
  storageBucket: "blog-mern-d5f82.appspot.com",
  messagingSenderId: "973748090319",
  appId: "1:973748090319:web:829c1049e5843dcaac8eba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export app as default
export default app;
