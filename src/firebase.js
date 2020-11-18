import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQ9WimoNixqoyCOEUOzV5Hh1WwzTfQoEk",
    authDomain: "patronus-72ce7.firebaseapp.com",
    databaseURL: "https://patronus-72ce7.firebaseio.com",
    projectId: "patronus-72ce7",
    storageBucket: "patronus-72ce7.appspot.com",
    messagingSenderId: "1051803836183",
    appId: "1:1051803836183:web:62876545215f849412e152",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebase.storage();

export { db, auth, storage };
