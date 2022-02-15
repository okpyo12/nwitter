import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAEizH8a7GBkPRwt5VtXEbBq7V1RRDzfnE",
    authDomain: "nwitter-dac2f.firebaseapp.com",
    projectId: "nwitter-dac2f",
    storageBucket: "nwitter-dac2f.appspot.com",
    messagingSenderId: "424499058607",
    appId: "1:424499058607:web:a9df7991737f6a7599815a"
  };

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();