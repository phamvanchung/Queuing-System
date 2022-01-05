import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAadao9Oko-XGyL4hcv_cLaTdto0SRtIf4",
  authDomain: "queuing-system-fecad.firebaseapp.com",
  projectId: "queuing-system-fecad",
  storageBucket: "queuing-system-fecad.appspot.com",
  messagingSenderId: "681225357061",
  appId: "1:681225357061:web:0c2c4d304194cb764a596c"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);

const baseDb = myFirebase.firestore();

export const db = baseDb;