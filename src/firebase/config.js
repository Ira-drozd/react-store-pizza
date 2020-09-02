import * as firebase from "firebase/app";
// import 'firebase/firestore'
import 'firebase/database'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBsX2vNeflPjb1PXPhJyx4fR73xN63JEq8",
    authDomain: "react-store-pizza.firebaseapp.com",
    databaseURL: "https://react-store-pizza.firebaseio.com",
    projectId: "react-store-pizza",
    storageBucket: "react-store-pizza.appspot.com",
    messagingSenderId: "837809097058",
    appId: "1:837809097058:web:c273fba4225c9fc832043b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectDatabase=firebase.database()

export {projectDatabase}
