"use client";
import { GlobalStyle } from "./global-style";
import { Main } from "@/atoms/main";
import { Header } from "@/organisms/header";
import { Game } from "@/organisms/game";

export default function Home() {
  return (
    <Main>
      <GlobalStyle />
      <Header />
      <Game />
    </Main>
  );
}
