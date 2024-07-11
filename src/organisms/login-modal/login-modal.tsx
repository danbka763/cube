import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Modal } from "@/atoms/modal";
import { Text } from "@/atoms/text";
import { UserContext } from "@/contexts/user-context";
import { InputWithError } from "@/molecules/input-with-error";
import { validateLogin, validatePassword } from "@/utils/validation";
import { useContext, useState } from "react";

export const LoginModal: React.FC<{
  onSubmit: (login: string, password: string) => any;
}> = ({ onSubmit }) => {
  const { openModal, setOpenModal, setAuth } = useContext(UserContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const isLoginValid = validateLogin(login);
  const isPasswordValid = validatePassword(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoginValid || !isPasswordValid) {
      if (!isLoginValid) setLoginErr(true);
      if (!isPasswordValid) setPassErr(true);
      return;
    }

    // Представим, что я сохраняю данные пользователя для последующего использования
    // А потом красиво где-нибудь вывожу "Добро пожаловать..."
    onSubmit(login, password).then((res: any) => {
      if (res?.id) {
        setAuth(true);
        setOpenModal(false);
      }
    });
  };

  return (
    <Modal
      controller={{ open: openModal, setOpen: setOpenModal }}
      onSubmit={handleSubmit}
    >
      <InputWithError
        type="text"
        placeholder="Login"
        value={login}
        onChange={(e) => {
          setLoginErr(false);
          setLogin(e.target.value);
        }}
        error={loginErr}
      />
      <InputWithError
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassErr(false);
          setPassword(e.target.value);
        }}
        error={passErr}
      />
      <Button type="submit">Войти</Button>
    </Modal>
  );
};
