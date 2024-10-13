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
  const [loading, setloading] = useState();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginEmailPassword = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    setloading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    setloading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsebscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setloading(false);
    });

    return () => {
      unsebscribe();
    };
  }, []);

  const Info = {
    createUser,
    loading,
    setloading,
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
