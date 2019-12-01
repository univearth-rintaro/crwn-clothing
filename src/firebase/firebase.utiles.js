import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB9B1-ysCDv2sMo-RlomaIH2eBzaSFiO_A",
  authDomain: "crwn-db-bba33.firebaseapp.com",
  databaseURL: "https://crwn-db-bba33.firebaseio.com",
  projectId: "crwn-db-bba33",
  storageBucket: "crwn-db-bba33.appspot.com",
  messagingSenderId: "633512777230",
  appId: "1:633512777230:web:aab26950f0e5f6fe840e5f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
