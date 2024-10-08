import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/FirebaseConfig";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [user, setuser] = useState([]);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsebscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
    });

    return () => {
      unsebscribe();
    };
  }, []);

  const Info = {
    createUser,
    loginEmailPassword,
    user,
    setuser,
    googleLogin,
    githubLogin,
    logOut,
  };

  return <AuthContext.Provider value={Info}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
