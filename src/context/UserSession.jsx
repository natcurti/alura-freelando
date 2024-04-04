/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import http from "../http";
import { StoreToken } from "../utils/StoreToken";

export const UserSessionContext = createContext({
  isLoggedIn: false,
  login: (email, senha) => {},
  logout: () => {},
  profile: {},
});

export const UserSessionProvider = ({ children }) => {
  const login = (email, senha) => {
    http
      .post("auth/login", {
        email,
        senha,
      })
      .then((response) =>
        StoreToken.defineToken(
          response.data.access_token,
          response.data.refresh_token
        )
      )
      .catch((error) => console.error(error));
  };

  const value = { login };

  return (
    <UserSessionContext.Provider value={value}>
      {children}
    </UserSessionContext.Provider>
  );
};
