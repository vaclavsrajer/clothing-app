import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8ZhVHLzbOJ7arolpepmvAGlOVHBF4Aac",
  authDomain: "crowning-db.firebaseapp.com",
  projectId: "crowning-db",
  storageBucket: "crowning-db.appspot.com",
  messagingSenderId: "616685304355",
  appId: "1:616685304355:web:733e4d771f995094b88f96",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionReference = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((obj) => {
    const docRef = doc(collectionReference, obj.title.toLowerCase());
    batch.set(docRef, obj);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionReference = collection(db, "categories");
  const q = query(collectionReference);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

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

  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response;
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
