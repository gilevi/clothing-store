import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAXzN4lg02EfFvInAB7OUNlTLI8bXDILP4",
    authDomain: "crwn-db-8a13c.firebaseapp.com",
    projectId: "crwn-db-8a13c",
    storageBucket: "crwn-db-8a13c.appspot.com",
    messagingSenderId: "439834555184",
    appId: "1:439834555184:web:b59dd7e06541cf6fb48ef5",
    measurementId: "G-FFVTKHF2ZR"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;