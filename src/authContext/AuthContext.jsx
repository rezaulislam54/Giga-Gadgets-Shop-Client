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
  const [products, setproducts] = useState([]);
  const [brandName, setbrandName] = useState([]);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const url = "https://giga-gadgets-shop-server.vercel.app/products";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
      });
  }, [url]);

  const urlBrand = "https://giga-gadgets-shop-server.vercel.app/brands";
  useEffect(() => {
    fetch(urlBrand)
      .then((res) => res.json())
      .then((data) => {
        setbrandName(data);
        console.log(data);
      });
  }, [urlBrand]);

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
    products,
    brandName,
  };

  return <AuthContext.Provider value={Info}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
