import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebaseConfig';



export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState([]) 


    const createUser =(email, password)=> {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
       const unscribe = onAuthStateChanged(auth, currentser => {
            setUser(currentser)
        })
        return () => unscribe() 
    },[])

    const userInfo = {
        user, 
        createUser, 
        login, 
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;