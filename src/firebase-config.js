import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDRWJl2NPbKuxPxmTHXUpgBRoPXzYVfLoQ",
  authDomain: "blog-website-65fad.firebaseapp.com",
  projectId: "blog-website-65fad",
  storageBucket: "blog-website-65fad.appspot.com",
  messagingSenderId: "899906330864",
  appId: "1:899906330864:web:39a026793eba80fa3fa235"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();