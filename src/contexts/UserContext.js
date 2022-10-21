import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState({displayName: 'AAAkash'});

    // function for register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // function for login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
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

    const authInfo = {user, createUser, signIn};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;