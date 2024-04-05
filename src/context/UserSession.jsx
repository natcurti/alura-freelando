/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import http from "../http";
import { StoreToken } from "../utils/StoreToken";

export const UserSessionContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  login: (email, senha) => {},
  logout: () => {},
  profile: {},
});

export const UserSessionProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, senha) => {
    http
      .post("auth/login", {
        email,
        senha,
      })
      .then((response) => {
        StoreToken.defineToken(
          response.data.access_token,
          response.data.refresh_token
        );
        setIsLoggedIn(true);
      })
      .catch((error) => console.error(error));
  };

  const value = { login, isLoggedIn, setIsLoggedIn };

  return (
    <UserSessionContext.Provider value={value}>
      {children}
    </UserSessionContext.Provider>
  );
};
