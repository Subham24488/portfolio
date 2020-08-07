import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDrUsLA1D8mTbjqVzsXn22mEla7XRf85kA",
  authDomain: "portfolio24488.firebaseapp.com",
  databaseURL: "https://portfolio24488.firebaseio.com",
  projectId: "portfolio24488",
  storageBucket: "portfolio24488.appspot.com",
  messagingSenderId: "901926395664",
  appId: "1:901926395664:web:bc7b2ebc3035152d378f95",
  measurementId: "G-65S3BVGQVE",
});

const db = firebaseApp.firestore();

export default db;
