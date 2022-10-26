import React, { useEffect } from 'react';
import { createContext } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect } from 'firebase/auth'
import { useState } from 'react';


export const AuthContex = createContext()
const Auth = getAuth(app)

const AuthProvidor = ({ children }) => {

    const { user, setUser } = useState(null);

    const googleSignIn = (providor) => {
        return signInWithPopup(Auth, providor)
    }

    const githubSignIn = (providor) => {
        return signInWithPopup(Auth, providor)
    }
    const loginWithGoogle = (providor) => {
        return signInWithRedirect(Auth, providor);
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => unsubscribe
    }, {})


    const authInfo = {
        user,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        loginWithGoogle
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvidor;