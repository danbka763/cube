"use client";
import { GlobalStyle } from "./global-style";
import { Main } from "@/atoms/main";
import { Header } from "@/organisms/header";
import { Game } from "@/organisms/game";
import { UserContextProvider } from "@/contexts/user-context";
import { LoginModal } from "@/organisms/login-modal";

export default function Home() {
  return (
    <UserContextProvider>
      <Main>
        <GlobalStyle />
        <Header />
        <Game />
        <LoginModal />
      </Main>
    </UserContextProvider>
  );
}
