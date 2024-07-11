import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Modal } from "@/atoms/modal";
import { UserContext } from "@/contexts/user-context";
import { useContext, useState } from "react";

export const LoginModal: React.FC<{
  onSubmit: (login: string, password: string) => any;
}> = ({ onSubmit }) => {
  const { openModal, setOpenModal, setAuth } = useContext(UserContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Представим, что я сохраняю данные пользователя для последующего использования
    // А потом красиво где-нибудь вывожу "Добро пожаловать..."
    onSubmit(login, password).then((res: any) => res?.id && setAuth(true));
  };

  return (
    <Modal
      controller={{ open: openModal, setOpen: setOpenModal }}
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Войти</Button>
    </Modal>
  );
};
