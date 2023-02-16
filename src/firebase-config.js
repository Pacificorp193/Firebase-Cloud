import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAU24S9k0YGwL6YQzn1a4gMS7pLF-KWteE",
  authDomain: "fir-cloud-efe24.firebaseapp.com",
  projectId: "fir-cloud-efe24",
  storageBucket: "fir-cloud-efe24.appspot.com",
  messagingSenderId: "253247354664",
  appId: "1:253247354664:web:4d352995063c904f25821d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
