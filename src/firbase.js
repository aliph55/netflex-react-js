// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCE3eZgX_l2nDzb6sOvF97XGCmBP-CFK0I",
  authDomain: "netflex-react-b465a.firebaseapp.com",
  projectId: "netflex-react-b465a",
  storageBucket: "netflex-react-b465a.appspot.com",
  messagingSenderId: "708456653937",
  appId: "1:708456653937:web:2099a588e477659ed067d0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
