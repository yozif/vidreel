import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGANux6ppHEpUooP_KdJm96H43KUHXEVU",
  authDomain: "vidreel-76b29.firebaseapp.com",
  projectId: "vidreel-76b29",
  storageBucket: "vidreel-76b29.firebasestorage.app",
  messagingSenderId: "774793054257",
  appId: "1:774793054257:web:2fed3e567f3c0eb9fd6d10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);