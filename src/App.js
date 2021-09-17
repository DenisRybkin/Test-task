import './App.css';
import React from "react";
import  firebase from "firebase";
import {Main} from "./components/Main";


function App() {

    const firebaseConfig = {
        apiKey: "AIzaSyBV4u3V4MAYqMiGHG3yLdRDeeFjJEjMjmI",
        authDomain: "test-task-ee265.firebaseapp.com",
        projectId: "test-task-ee265",
        storageBucket: "test-task-ee265.appspot.com",
        messagingSenderId: "1009846406436",
        appId: "1:1009846406436:web:af2a658881017c91e0f7b1"
    }

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    return (
        <Main/>
  );
}

export default App;
