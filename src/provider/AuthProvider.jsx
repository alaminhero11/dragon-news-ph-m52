import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

// ----------Const----------
export const AuthContext = createContext();
const auth = getAuth(app);


// ----------AuthProvider----------
const AuthProvider = ({ children }) => {
    // -----useState-----
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // -----Create New User-----
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // ----- User LogIn -----
    const userLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // ----- Update Profile -----
    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    // ----- SignOut -----
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // -----useEffect-----
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])


    // ---------- AuthInfo ----------
    // ------------------------------
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogIn,
        loading,
        updateUserProfile,
    }
    // ----------Return----------
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;