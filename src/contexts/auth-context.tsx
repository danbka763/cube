import React, { createContext, useState } from "react";

const AuthContext = createContext(
  {} as {
    auth: boolean;
    setAuth: (auth: boolean) => void;
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
  }
);

const AuthContextProvider = (props: { children: JSX.Element }) => {
  const { children } = props;

  const [auth, setAuth] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth, openModal, setOpenModal }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
