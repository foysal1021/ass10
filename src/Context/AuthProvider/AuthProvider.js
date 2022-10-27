import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/Firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  //user create start
  const userRegister = (email, password) => {
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

  const Authinfo = { userRegister, userVerifi, userProfileUpdated };
  return (
    <AuthContext.Provider value={Authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
