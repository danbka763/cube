"use client";
import { GlobalStyle } from "./global-style";
import { Main } from "@/atoms/main";
import { Header } from "@/organisms/header";
import { Game } from "@/organisms/game";
import { AuthContextProvider } from "@/contexts/auth-context";
import { LoginModal } from "@/organisms/login-modal";

export default function Home() {
  return (
    <AuthContextProvider>
      <Main>
        <GlobalStyle />
        <Header />
        <Game />
        <LoginModal />
      </Main>
    </AuthContextProvider>
  );
}
