import { Button } from "@/atoms/button";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;

const CustomVariant = styled.div`
  grid-column: span 2; // Растянуть на 2 колонки
`;

export const SelectVariant: React.FC = () => {
  return (
    <Container>
      <Button>Четное</Button>
      <Button>Нечетное</Button>
      <Button>От 1 до 3</Button>
      <Button>От 4 до 6</Button>
      <CustomVariant>
        <Button>Конкретное число</Button>
      </CustomVariant>
    </Container>
  );
};
