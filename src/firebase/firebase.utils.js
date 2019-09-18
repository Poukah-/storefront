import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA8YZOzKGXbe6rAMr_DIsn6snqqSfpBYaM",
  authDomain: "storefront-db-cc981.firebaseapp.com",
  databaseURL: "https://storefront-db-cc981.firebaseio.com",
  projectId: "storefront-db-cc981",
  storageBucket: "",
  messagingSenderId: "123270756374",
  appId: "1:123270756374:web:e1425b88cec7cdec245d37"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
