import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCkO82IJAR3nEnZT7A2xq4dX8fspej0nYg",
  authDomain: "whatsapp-clone-shivam.firebaseapp.com",
  projectId: "whatsapp-clone-shivam",
  storageBucket: "whatsapp-clone-shivam.appspot.com",
  messagingSenderId: "10095625598",
  appId: "1:10095625598:web:a25ca9248e40fa35261f2f",
  measurementId: "G-PDM2LSM8X7"
})



const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()


export {db,auth,storage}





