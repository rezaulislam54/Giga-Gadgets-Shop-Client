import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../config/FirebaseConfig";

export const AuthContext = createContext(null);
const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email,password)
}

const loginEmailPassword = (email, password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}

const Info = {
  createUser,
  loginEmailPassword,
};
const AuthContextProvider = ({children}) => {
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;