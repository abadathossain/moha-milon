// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXasdJxs9kNF5dhOO8q7xSy2xuDdVtNFo",
  authDomain: "moha-milon-e5b31.firebaseapp.com",
  projectId: "moha-milon-e5b31",
  storageBucket: "moha-milon-e5b31.appspot.com",
  messagingSenderId: "232141996055",
  appId: "1:232141996055:web:9170be6b7667473eb99c52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;