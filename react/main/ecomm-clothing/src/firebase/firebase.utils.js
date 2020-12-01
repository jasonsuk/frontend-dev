// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAUhhPOkzrxaiYk0tf3BtJPG2zS923Ovfg',
    authDomain: 'clothing-db-9d93b.firebaseapp.com',
    databaseURL: 'https://clothing-db-9d93b.firebaseio.com',
    projectId: 'clothing-db-9d93b',
    storageBucket: 'clothing-db-9d93b.appspot.com',
    messagingSenderId: '722998189986',
    appId: '1:722998189986:web:423587b4aa92bf91199cfb',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export firebase modules
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Authentication
const provider = new firebase.auth.GoogleAuthProvider();
// The authorization server prompts the user to select a user account
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
