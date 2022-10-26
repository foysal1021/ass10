import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/Firebase.it";

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value="">{children}</AuthContext.Provider>;
};

export default AuthProvider;
