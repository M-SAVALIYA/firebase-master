// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqxKZOWabFyADGb8atkA0GegWV3yYIWMc",
  authDomain: "fir-crude-c4bc1.firebaseapp.com",
  projectId: "fir-crude-c4bc1",
  storageBucket: "fir-crude-c4bc1.appspot.com",
  messagingSenderId: "640307310041",
  appId: "1:640307310041:web:9e8502c8b5bcdab75abdc8",
  measurementId: "G-DQWJSCRD56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage };