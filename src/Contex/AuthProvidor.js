import React from 'react';
import { createContext } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth } from 'firebase/auth'
export const AuthContex = createContext()
const Auth = getAuth(app)

const AuthProvidor = ({ children }) => {
    const user = { displayName: 'chinko' }



    const authInfo = { user }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvidor;