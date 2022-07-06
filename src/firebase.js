import firebase from "firebase/compat/app"
import "firebase/compat/firestore"


const config = {
    apiKey: "AIzaSyDUKMDXUKalkvGNz5XcUWMMNfwNoTFVxuk",
    authDomain: "mytodolist-6f0bb.firebaseapp.com",
    projectId: "mytodolist-6f0bb",
    storageBucket: "mytodolist-6f0bb.appspot.com",
    messagingSenderId: "647235277569",
    appId: "1:647235277569:web:bf91bd8a1913f857128100",
    measurementId: "G-E0X0LRHTZT"
};

firebase.initializeApp(config);
const firestore = new firebase.firestore()

export { firestore }