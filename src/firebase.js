import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDKvpOZEdwAovh-HI2LJB7y10JxWO-zeJ4",
  authDomain: "discord-clone-a76ef.firebaseapp.com",
  projectId: "discord-clone-a76ef",
  storageBucket: "discord-clone-a76ef.appspot.com",
  messagingSenderId: "1049312267988",
  appId: "1:1049312267988:web:93bc7d9a5c3b8e9f64b541",
  measurementId: "G-FD2RD1BSPC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db