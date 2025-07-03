import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDLF80186-tZgzmpdYlc_7wdGfrcdkvaQU",
  authDomain: "ew-pro-340a7.firebaseapp.com",
  projectId: "ew-pro-340a7",
  storageBucket: "ew-pro-340a7.firebasestorage.app",
  messagingSenderId: "741739762159",
  appId: "1:741739762159:web:c7a67285162d06e85fa61a",
  measurementId: "G-C94BQ9EFBC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
