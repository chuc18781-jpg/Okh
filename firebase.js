import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFtlO7AuPJNcYImbOl6CvaSyRSX9Upce4",
  authDomain: "shopaccgaming-dab0b.firebaseapp.com",
  projectId: "shopaccgaming-dab0b",
  storageBucket: "shopaccgaming-dab0b.firebasestorage.app",
  messagingSenderId: "795476587036",
  appId: "1:795476587036:web:59519acc584ade7cd2a5d9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };