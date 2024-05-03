// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHjcPR18MxeZ1iMLM2OI336y26kDPJmCo",
  authDomain: "bazarapp-35886.firebaseapp.com",
  projectId: "bazarapp-35886",
  storageBucket: "bazarapp-35886.appspot.com",
  messagingSenderId: "93963537839",
  appId: "1:93963537839:web:b8bd1fb120939d431d335a",
  measurementId: "G-M1BCC09Z8Y",
};

export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default { getDocs, addDoc, collection, getFirestore, serverTimestamp };
