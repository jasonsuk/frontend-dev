// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';
// import { clearItemFromCart } from '../redux/cart/cart.action';

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

// Storing User data in Firebase - export to app.js
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    // Check if a snapshot exists, or create it
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async (
    collectionKey,
    documentsToAdd
) => {
    const collectionRef = firestore.collection(collectionKey);

    // Save when all data is fetched
    const batch = firestore.batch();
    documentsToAdd.forEach((doc) => {
        const documentRef = collectionRef.doc();
        // documentRef.set(doc)
        batch.set(documentRef, doc);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotMap = (collections) => {
    const transformedQuery = collections.docs.map((doc) => {
        // console.log(doc);
        // console.log(doc.data());
        const { title, items } = doc.data();

        return {
            // js method : pass string and return url
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
    });

    // console.log(transformedQuery);
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
