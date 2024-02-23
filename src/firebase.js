import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAyi3V7bGmcPRsLmawH1s-p2uS2osoxdLA",
  authDomain: "wechat-df2f6.firebaseapp.com",
  projectId: "wechat-df2f6",
  storageBucket: "wechat-df2f6.appspot.com",
  messagingSenderId: "906007025977",
  appId: "1:906007025977:web:ae338cba99bf40dbb430e8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();