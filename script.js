import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyBFtlO7AuPJNcYImbOl6CvaSyRSX9Upce4",
  authDomain: "shopaccgaming-dab0b.firebaseapp.com",
  projectId: "shopaccgaming-dab0b",
  storageBucket: "shopaccgaming-dab0b.firebasestorage.app",
  messagingSenderId: "795476587036",
  appId: "1:795476587036:web:59519acc584ade7cd2a5d9"};
  


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.themAcc = async function() {
  
  const ten = document.getElementById("tenacc").value;
  const game = document.getElementById("game").value;
  const gia = document.getElementById("gia").value;
  const anh = document.getElementById("anh").value;
  
  await addDoc(collection(db, "accounts"), {
    
    ten,
    game,
    gia,
    anh
    
  });
  
  alert("Đã thêm acc!");
  
};