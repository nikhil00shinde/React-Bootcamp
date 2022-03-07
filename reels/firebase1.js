// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAFQUNww4rQ45sDDIY3vWg3W3DYezM_-S8",
	authDomain: "reels-next-yt-2551e.firebaseapp.com",
	projectId: "reels-next-yt-2551e",
	storageBucket: "reels-next-yt-2551e.appspot.com",
	messagingSenderId: "663292133565",
	appId: "1:663292133565:web:5f29848583e504282cf7d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const storage = getStorage();
const db = getFirestore();
export { auth, storage, db };
export default app;
