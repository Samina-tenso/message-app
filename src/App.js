import React from "react"
import './App.css';

import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks"

firebase.initializeApp({
  apiKey: "AIzaSyAjfG0QIgUcDWJbNzNGiVvlkbOYDXIOxJI",
  authDomain: "message-app-22173.firebaseapp.com",
  projectId: "message-app-22173",
  storageBucket: "message-app-22173.appspot.com",
  messagingSenderId: "1077159388183",
  appId: "1:1077159388183:web:da0e819f8b89b5f92b6852"
})


const auth = firebase.auth()
const firestore = firebase.firestore()




function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <header className="App-header">
        <section>
          {user ? <ChatRoom /> : <SignIn />}
        </section>
      </header>
    </div>
  );
}

export default App;
