// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkuw82zTqtiPDp3eS2qwGr8UUQFDBBglM",
  authDomain: "curso-svelte-58c5d.firebaseapp.com",
  projectId: "curso-svelte-58c5d",
  storageBucket: "curso-svelte-58c5d.appspot.com",
  messagingSenderId: "1067367490239",
  appId: "1:1067367490239:web:8a8aeae384fa8319515c0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)