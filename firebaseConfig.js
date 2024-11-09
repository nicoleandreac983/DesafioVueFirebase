// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlelAAMztXVApHYz_DcwXADUQjnZTmQ08",
  authDomain: "desafiovuefirebase.firebaseapp.com",
  projectId: "desafiovuefirebase",
  storageBucket: "desafiovuefirebase.firebasestorage.app",
  messagingSenderId: "192913694583",
  appId: "1:192913694583:web:7978edf2b440df8a170b72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app