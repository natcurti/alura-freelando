/* eslint-disable react/prop-types */
import { createContext } from "react";

export const UserSessionContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  profile: {},
});

export const UserSessionProvider = ({ children }) => {
  const value = {};

  return (
    <UserSessionContext.Provider value={value}>
      {children}
    </UserSessionContext.Provider>
  );
};
