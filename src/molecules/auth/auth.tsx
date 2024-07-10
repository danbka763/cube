import { Button } from "@/atoms/button";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const Auth = () => {
  return (
    <ButtonContainer>
      <Button>Вход</Button>
      <Button>Регистрация</Button>
    </ButtonContainer>
  );
};
