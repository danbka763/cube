import { fetchUser } from "@/api/fetchUser";
import React, { createContext, useEffect, useState } from "react";

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

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const UserContextProvider = (props: IProps) => {
  const { children } = props;

  const [auth, setAuth] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [wallet, setWallet] = useState(100);

  const changeWallet = (count: number) => {
    setWallet((wallet) => wallet + count);
  };

  console.log("wallet: ", wallet);

  useEffect(() => {
    // Представим, что я сохраняю данные пользователя для последующего использования
    // А потом красиво где-нибудь вывожу "С возвращением..."
    fetchUser().then((res) => res?.id && setAuth(true));
  }, []);

  return (
    <UserContext.Provider
      value={{ auth, setAuth, openModal, setOpenModal, wallet, changeWallet }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
