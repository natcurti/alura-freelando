/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

const initialUser = {
  profile: "",
  interests: "",
  fullName: "",
  federatedState: "",
  city: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

export const RegisterUserContext = createContext({
  user: initialUser,
  setProfile: () => {},
  setInterests: () => {},
  setFullName: () => {},
  setFederatedState: () => {},
  setCity: () => {},
  setEmail: () => {},
  setPassword: () => {},
  setPasswordConfirmation: () => {},
});

export const RegisterUserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const setProfile = (profile) => {
    setUser((previousState) => {
      return {
        ...previousState,
        profile,
      };
    });
  };

  const setInterests = (interests) => {
    setUser((previousState) => {
      return {
        ...previousState,
        interests,
      };
    });
  };

  const setFullName = (fullName) => {
    setUser((previousState) => {
      return {
        ...previousState,
        fullName,
      };
    });
  };

  const setFederatedState = (federatedState) => {
    setUser((previousState) => {
      return {
        ...previousState,
        federatedState,
      };
    });
  };

  const setCity = (city) => {
    setUser((previousState) => {
      return {
        ...previousState,
        city,
      };
    });
  };

  const setEmail = (email) => {
    setUser((previousState) => {
      return {
        ...previousState,
        email,
      };
    });
  };

  const setPassword = (password) => {
    setUser((previousState) => {
      return {
        ...previousState,
        password,
      };
    });
  };

  const setPasswordConfirmation = (passwordConfirmation) => {
    setUser((previousState) => {
      return {
        ...previousState,
        passwordConfirmation,
      };
    });
  };

  const context = {
    user,
    setProfile,
    setInterests,
    setFullName,
    setFederatedState,
    setCity,
    setEmail,
    setPassword,
    setPasswordConfirmation,
  };

  return (
    <RegisterUserContext.Provider value={context}>
      {children}
    </RegisterUserContext.Provider>
  );
};
