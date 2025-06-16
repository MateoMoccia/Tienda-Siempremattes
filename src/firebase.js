import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAXAQ3lZ0bQr5J7TcuM9vMPyXEFNHltlNs",
  authDomain: "catalogo-siempremates.firebaseapp.com",
  projectId: "catalogo-siempremates",
  storageBucket: "catalogo-siempremates.appspot.com",
  messagingSenderId: "750782427078",
  appId: "1:750782427078:web:a1056362e4a4fa9bb20cc7",
  measurementId: "G-Y1XVWQJ96T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exportar la base de datos Firestore
export const db = getFirestore(app);