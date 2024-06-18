const baseUrl = `http://192.168.1.17:8080/api`;
export default baseUrl;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBTp6g4qVSIeK7fe1f_K91hsdoi3aPuFg",
  authDomain: "education-bank.firebaseapp.com",
  projectId: "education-bank",
  storageBucket: "education-bank.appspot.com",
  messagingSenderId: "14154146402",
  appId: "1:14154146402:web:42756f6f9472524369e73b",
  measurementId: "G-L2NX2NWFX8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider };
