import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Modal } from "@/atoms/modal";
import { UserContext } from "@/contexts/user-context";
import { useContext } from "react";

export const LoginModal: React.FC = () => {
  const { openModal, setOpenModal } = useContext(UserContext);
  return (
    <Modal controller={{ open: openModal, setOpen: setOpenModal }}>
      <Input placeholder="Login" />
      <Input placeholder="Password" />
      <Button>Войти</Button>
    </Modal>
  );
};
