import React from 'react';
import { createContext } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect } from 'firebase/auth'


export const AuthContex = createContext()
const Auth = getAuth(app)

const AuthProvidor = ({ children }) => {

    const user = { displayName: 'chinko' }

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