import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/Firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  //user create start
  const userRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //user create end

  // send email verifi message start
  const userVerifi = () => {
    return sendEmailVerification(auth.currentUser);
  };
  // send email verifi message end

  // updated your profile start
  const userProfileUpdated = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  // updated your profile end

  // user singing start
  const userSinging = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user singing end

  // logout start
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  // logout end

  // singin with google start
  const GoogleSINGIN = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // singin with google end

  // github singing start
  const GithubSINGIN = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // github singing start

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const Authinfo = {
    user,
    userRegister,
    userVerifi,
    userProfileUpdated,
    userSinging,
    logout,
    GoogleSINGIN,
    GithubSINGIN,
    loading,
  };
  return (
    <AuthContext.Provider value={Authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
