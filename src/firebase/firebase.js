import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAHsyXLKCgjniJn2B_z_PwWAdf7cbA_V18",
    authDomain: "crown-shop-arsh.firebaseapp.com",
    projectId: "crown-shop-arsh",
    storageBucket: "crown-shop-arsh.appspot.com",
    messagingSenderId: "809093107645",
    appId: "1:809093107645:web:9822cde27c7427fa6c4cd4",
    measurementId: "G-29N2MHXLE8"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists)
    {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
