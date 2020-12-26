import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAz0oboOBrJy7mSKWxr_Kex_Ld8xtZf38Y",
  authDomain: "myacc-f0222.firebaseapp.com",
  projectId: "myacc-f0222",
  storageBucket: "myacc-f0222.appspot.com",
  messagingSenderId: "239405300972",
  appId: "1:239405300972:web:98299fc5a6b9a064f9f9c9",
  measurementId: "G-XQJQ6M49GR"
};

const firebaseapp = firebase.initializeApp(firebaseConfig)
export const db = firebaseapp.firestore()
export const auth = firebase.auth()