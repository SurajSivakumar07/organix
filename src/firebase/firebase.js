// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGkZbMSBl19B6I0t-BlzeM9UzeblpbC54",
  authDomain: "socail-meda.firebaseapp.com",
  databaseURL: "https://socail-meda-default-rtdb.firebaseio.com",
  projectId: "socail-meda",
  storageBucket: "socail-meda.appspot.com",
  messagingSenderId: "710400362028",
  appId: "1:710400362028:web:b57636bbc86c7a56947389",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
