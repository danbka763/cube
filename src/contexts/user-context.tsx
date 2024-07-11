import React, { createContext, useState } from "react";

const UserContext = createContext(
  {} as {
    auth: boolean;
    setAuth: (auth: boolean) => void;
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
    wallet: number;
    changeWallet: (count: number) => void;
  }
);

const UserContextProvider = (props: { children: JSX.Element }) => {
  const { children } = props;

  const [auth, setAuth] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [wallet, setWallet] = useState(100);

  const changeWallet = (count: number) => {
    setWallet((wallet) => wallet + count);
  };

  console.log({wallet})

  return (
    <UserContext.Provider
      value={{ auth, setAuth, openModal, setOpenModal, wallet, changeWallet }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
