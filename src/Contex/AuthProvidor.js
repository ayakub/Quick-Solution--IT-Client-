import React, { useEffect } from 'react';
import { createContext } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile } from 'firebase/auth'
import { useState } from 'react';


export const AuthContex = createContext()
const Auth = getAuth(app)

const AuthProvidor = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignIn = (providor) => {
        setLoading(true)
        return signInWithPopup(Auth, providor)
    }

    const githubSignIn = (providor) => {
        setLoading(true)
        return signInWithPopup(Auth, providor)
    }
    const loginWithGoogle = (providor) => {
        setLoading(true)
        return signInWithRedirect(Auth, providor);
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(Auth);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(Auth.currentUser, profile)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
            console.log(currentUser)
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, {})


    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        githubSignIn,
        loginWithGoogle,
        updateUserProfile,
        loading
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvidor;