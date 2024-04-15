
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    // appId: import.meta.env.VITE_FIREBASE_MESSAGING_APP_ID,

    apiKey: "AIzaSyBChuq9EtjRi5uS2Ayt-wm-iY00zu8HOiA",
    authDomain: "cafeteria-451c3.firebaseapp.com",
    projectId: "cafeteria-451c3",
    storageBucket: "cafeteria-451c3.appspot.com",
    messagingSenderId: "254520611286",
    appId: "1:254520611286:web:4908cd75e8a79f2aea9477"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (err) {
    // eslint-disable-next-line no-undef
    throw error;
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    // eslint-disable-next-line no-undef
    throw error;
  }
};

const sendPasswordReset = async (email) => {
  // eslint-disable-next-line no-useless-catch
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
};

const signInWithGoogle = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const res = await signInWithPopup(auth, googleAuthProvider);
    const user = res.user;
    return user;
  } catch (error) {
    throw error;
  }
};

export{
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  auth,
  db,
  storage,
  sendPasswordReset,
  signInWithGoogle,
};