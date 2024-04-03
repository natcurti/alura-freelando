/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  submitUser: () => {},
  validateProfile: () => {},
  validateInterests: () => {},
});

export const RegisterUserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

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

  const submitUser = () => {
    axios
      .post("http://localhost:8080/auth/register", user)
      .then(() => navigate("/cadastro/concluido"))
      .catch((error) => console.error(error));
  };

  const validateProfile = () => {
    return !!user.profile;
  };

  const validateInterests = () => {
    return !!user.interests && !!user.profile;
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
    submitUser,
    validateProfile,
    validateInterests,
  };

  return (
    <RegisterUserContext.Provider value={context}>
      {children}
    </RegisterUserContext.Provider>
  );
};
