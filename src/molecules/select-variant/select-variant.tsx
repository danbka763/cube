import { Button } from "@/atoms/button";
import React from "react";
import styled from "styled-components";
import { ButtonWithInput } from "../button-widh-input";
import { EVariant } from "@/model/variant";

const Container = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;

const CustomVariant = styled.div`
  grid-column: span 2; // Растянуть на 2 колонки
`;

interface IProps {
  controller: {
    variant: EVariant;
    setVariant: (variant: EVariant) => void;
  };
}

export const SelectVariant: React.FC<IProps> = (props) => {
  const { variant, setVariant } = props.controller;

  return (
    <Container>
      <Button onClick={() => setVariant(EVariant.even)} active={variant === EVariant.even}>Четное</Button>
      <Button onClick={() => setVariant(EVariant.odd)} active={variant === EVariant.odd}>Нечетное</Button>
      <Button onClick={() => setVariant(EVariant.range1to3)} active={variant === EVariant.range1to3}>От 1 до 3</Button>
      <Button onClick={() => setVariant(EVariant.range4to6)} active={variant === EVariant.range4to6}>От 4 до 6</Button>
      <CustomVariant>
        <ButtonWithInput onClick={() => setVariant(EVariant.specificNumber)} active={variant === EVariant.specificNumber} />
      </CustomVariant>
    </Container>
  );
};
