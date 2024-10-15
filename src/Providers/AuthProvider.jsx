import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react"
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
    const [user, setUser]=useState(null);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
const authInfo={
    user,createUser,signIn
}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
