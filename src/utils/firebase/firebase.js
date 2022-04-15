import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8ZhVHLzbOJ7arolpepmvAGlOVHBF4Aac",
  authDomain: "crowning-db.firebaseapp.com",
  projectId: "crowning-db",
  storageBucket: "crowning-db.appspot.com",
  messagingSenderId: "616685304355",
  appId: "1:616685304355:web:733e4d771f995094b88f96",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  addionalInformation = {}
) => {
  if (!userAuth) {
    return;
  }
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...addionalInformation,
      });
    } catch (err) {
      console.log("error creating a user", err.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response;
};

export const signInrWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
};
