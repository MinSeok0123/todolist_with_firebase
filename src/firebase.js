import firebase from "firebase/compat/app"
import "firebase/compat/firestore"


const config = {
    apiKey: "AIzaSyCaGup-JzVuh5NPPIhP5EgbTWSulqLe2CA",
    authDomain: "todo-ea7a1.firebaseapp.com",
    databaseURL: "https://todo-ea7a1-default-rtdb.firebaseio.com",
    projectId: "todo-ea7a1",
    storageBucket: "todo-ea7a1.appspot.com",
    messagingSenderId: "858143640446",
    appId: "1:858143640446:web:2d9d7b5a22dac7b908012f",
    measurementId: "G-2YFZB2ZVY7"
};

firebase.initializeApp(config);
const firestore = new firebase.firestore()

export { firestore }