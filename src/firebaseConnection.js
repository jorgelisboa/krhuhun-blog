// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore'; //Importando firebase firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "blog-237cb.firebaseapp.com",
  projectId: "blog-237cb",
  storageBucket: "blog-237cb.appspot.com",
  messagingSenderId: "893470738970",
  appId: "1:893470738970:web:eabe7b6e911c78d73bdfa3",
  measurementId: "G-2BRYQP03R2"
};

// Initialize Firebase
if(!firebase.apps.length){ //Verificando se a conexão já esta aberta
    firebase.initializeApp(firebaseConfig)
}
export default firebase
