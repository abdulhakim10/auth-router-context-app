import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState({displayName: 'AAAkash'});

    const googleProvider = new GoogleAuthProvider();

    // function for register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // function for login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign In With Google
    const signInWithGoogle = () => {
            return signInWithPopup(auth, googleProvider)
    }

    // function for logout
    const logOut = () => {
        signOut(auth);
    }

    // for display user on header
    // why are we doing this
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log('on auth state changed', currentUser)
    })
    return () => {
        unsubscribe();
    }
   },[])

    const authInfo = {user, createUser, signIn, logOut, signInWithGoogle};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;