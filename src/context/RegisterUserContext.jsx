/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import http from "../http";

const initialUser = {
  perfil: "",
  interesse: "",
  nome: "",
  uf: "",
  cidade: "",
  email: "",
  senha: "",
  senhaConfirmada: "",
};

export const RegisterUserContext = createContext({
  user: initialUser,
  setPerfil: () => {},
  setInteresse: () => {},
  setNome: () => {},
  setUf: () => {},
  setCidade: () => {},
  setEmail: () => {},
  setSenha: () => {},
  setSenhaConfirmada: () => {},
  submitUser: () => {},
  validateProfile: () => {},
  validateInterests: () => {},
});

export const RegisterUserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const setPerfil = (perfil) => {
    setUser((previousState) => {
      return {
        ...previousState,
        perfil,
      };
    });
  };

  const setInteresse = (interesse) => {
    setUser((previousState) => {
      return {
        ...previousState,
        interesse,
      };
    });
  };

  const setNome = (nome) => {
    setUser((previousState) => {
      return {
        ...previousState,
        nome,
      };
    });
  };

  const setUf = (uf) => {
    setUser((previousState) => {
      return {
        ...previousState,
        uf,
      };
    });
  };

  const setCidade = (cidade) => {
    setUser((previousState) => {
      return {
        ...previousState,
        cidade,
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

  const setSenha = (senha) => {
    setUser((previousState) => {
      return {
        ...previousState,
        senha,
      };
    });
  };

  const setSenhaConfirmada = (senhaConfirmada) => {
    setUser((previousState) => {
      return {
        ...previousState,
        senhaConfirmada,
      };
    });
  };

  const submitUser = () => {
    console.log(user);
    http
      .post("auth/register", user)
      .then(() => navigate("/cadastro/concluido"))
      .catch((error) => console.error(error));
  };

  const validateProfile = () => {
    return !!user.perfil;
  };

  const validateInterests = () => {
    return !!user.interesse && !!user.perfil;
  };

  const context = {
    user,
    setPerfil,
    setInteresse,
    setNome,
    setUf,
    setCidade,
    setEmail,
    setSenha,
    setSenhaConfirmada,
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
