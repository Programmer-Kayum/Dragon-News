// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADqOQaS5qHInfeO00upE-dPE6bDN74LRU",
  authDomain: "dragon-news-9a6bd.firebaseapp.com",
  projectId: "dragon-news-9a6bd",
  storageBucket: "dragon-news-9a6bd.firebasestorage.app",
  messagingSenderId: "241738642927",
  appId: "1:241738642927:web:dfea902135e0436e9a321a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
