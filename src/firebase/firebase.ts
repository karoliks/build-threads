import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBJyhtTxCPmvJauB5hAO9sKIPssf_p9eoc",
  appId: "1:114671905742:web:52bd5736d8e583a5e8199f",
  authDomain: "build-threads.firebaseapp.com",
  databaseURL: "https://build-threads.firebaseio.com",
  measurementId: "G-B52LQS0EGJ",
  messagingSenderId: "114671905742",
  projectId: "build-threads",
  storageBucket: "build-threads.appspot.com"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();
