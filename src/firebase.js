// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSUR9JdITHNX8PqsbDB3ya6WUc68IoX1g",
  authDomain: "realtor-clone-d8bd2.firebaseapp.com",
  projectId: "realtor-clone-d8bd2",
  storageBucket: "realtor-clone-d8bd2.appspot.com",
  messagingSenderId: "234545416701",
  appId: "1:234545416701:web:868c279451d47d53797194",
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
