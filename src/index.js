import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";

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

export const Context = React.createContext(null);


const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
     <Context.Provider  value={{
         firebase,
         auth,
         firestore,
     }}>
         <App />
     </Context.Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

