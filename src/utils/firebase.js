import firebase from 'firebase/compat/app';
import "firebase/compat/database";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA6A-yuH55BKYiAeVgq0IMOjDYkeqt9ghY",
  authDomain: "sulltrader.firebaseapp.com",
  databaseURL:
    "https://sulltrader-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sulltrader",
  storageBucket: "sulltrader.appspot.com",
  messagingSenderId: "78466095709",
  appId: "1:78466095709:web:d9e3bd249b99b93cbd4bb4",
  measurementId: "G-R1Q7MPDLB7",
};

firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
