"use client";
import { GlobalStyle } from "./global-style";
import { UserContextProvider } from "@/contexts/user-context";
import { MainTemplate } from "@/templates/main-template";

export default function Home() {
  return (
    <UserContextProvider>
      <GlobalStyle />
      <MainTemplate />
    </UserContextProvider>
  );
}
