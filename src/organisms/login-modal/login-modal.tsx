import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Modal } from "@/atoms/modal";
import { AuthContext } from "@/contexts/auth-context";
import { useContext } from "react";

export const LoginModal: React.FC = () => {
  const { openModal, setOpenModal } = useContext(AuthContext);
  return (
    <Modal controller={{ open: openModal, setOpen: setOpenModal }}>
      <Input placeholder="Login" />
      <Input placeholder="Password" />
      <Button>Войти</Button>
    </Modal>
  );
};
