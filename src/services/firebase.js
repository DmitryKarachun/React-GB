import firebase from "firebase/compat/app"
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEhOa5WDkjhxs4aKNf5kd5KiD19DNcBMY",
  authDomain: "firelesson-70a2f.firebaseapp.com",
  projectId: "firelesson-70a2f",
  storageBucket: "firelesson-70a2f.appspot.com",
  messagingSenderId: "416808643241",
  appId: "1:416808643241:web:45bdb8ddc12d852f7117b8"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebase.database().ref();
export const auth = firebase.auth();