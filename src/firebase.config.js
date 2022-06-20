import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAep0k0dodKARAGHNItt0hoZVit7ENg6f4",
	authDomain: "rent-sell-house.firebaseapp.com",
	projectId: "rent-sell-house",
	storageBucket: "rent-sell-house.appspot.com",
	messagingSenderId: "737606417657",
	appId: "1:737606417657:web:9efc57b0ec479287a5b628",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
