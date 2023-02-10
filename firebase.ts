import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCWKwxnrjzEEe3Dv_HkXD3VQHCuAHbgoHI",
	authDomain: "chatgpt-messenger-32a1b.firebaseapp.com",
	projectId: "chatgpt-messenger-32a1b",
	storageBucket: "chatgpt-messenger-32a1b.appspot.com",
	messagingSenderId: "1081543179877",
	appId: "1:1081543179877:web:0469eb6e7829ed930ed08c",
};

// Initialize Firebase
// const app = getApps().length === 0 ? getApp() : initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
