import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        return signOut(auth)
    }
  

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            console.log('auth state change')
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        user, createUser, signInUser, logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
