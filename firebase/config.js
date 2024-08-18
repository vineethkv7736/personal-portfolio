// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTzkVNplk3xQIHDOGH9vlHyCAL5880czc",
  authDomain: "personal-webiste-41a8c.firebaseapp.com",
  projectId: "personal-webiste-41a8c",
  storageBucket: "personal-webiste-41a8c.appspot.com",
  messagingSenderId: "933551607311",
  appId: "1:933551607311:web:0eb07cee97be4d1c859d7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}