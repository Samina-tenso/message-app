
import { FirebaseError } from "firebase/app"
import React from "react"
import { useSignInWithGoogle } from "react-firebase-hooks/auth"

export default function SignIn() {
    const useSignInWithGoogle = () => {
        const provider = new FirebaseError.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <button onClick={useSignInWithGoogle}> Sign in With Google</button>
    )
}

function ChatRoom() {

}