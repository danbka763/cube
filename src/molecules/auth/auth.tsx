import { Button } from "@/atoms/button";
import { AuthContext } from "@/contexts/auth-context";
import { useContext } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
`;

export const Auth = () => {
  const { setOpenModal } = useContext(AuthContext);
  return (
    <ButtonContainer>
      <Button onClick={() => setOpenModal(true)}>Вход</Button>
      <Button>Регистрация</Button>
    </ButtonContainer>
  );
};
