import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAMFKKwluVLcQ9j1MbJvXaUowRnMnH24CY",
    authDomain: "react-calendar-a0816.firebaseapp.com",
    projectId: "react-calendar-a0816",
    storageBucket: "react-calendar-a0816.appspot.com",
    messagingSenderId: "553164059019",
    appId: "1:553164059019:web:a87f85c081f87dc962bf8e",
    measurementId: "G-8ERF0443EN"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };