import { Main } from "@/atoms/main";
import { Header } from "@/organisms/header";
import { Game } from "@/organisms/game";
import { LoginModal } from "@/organisms/login-modal";
import { handleLogin } from "@/api/login";

export const MainTemplate = () => {
  return (
    <Main>
      <Header />
      <Game />
      <LoginModal onSubmit={handleLogin} />
    </Main>
  );
};
