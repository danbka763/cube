import styled from "styled-components";
import { Button, IButtonProps } from "../../atoms/button/button";
import React from "react";
import { Text } from "@/atoms/text";
import { Input } from "@/atoms/input";

const StyledButtonWithInput = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface IButtonWithInputProps extends IButtonProps {
  specificNumber: number;
  setSpecificNumber: (num: number) => void;
}

export const ButtonWithInput: React.FC<IButtonWithInputProps> = (props) => {
  const { specificNumber, setSpecificNumber, ...anyProps } = props;
  const { active } = anyProps;
  return (
    <StyledButtonWithInput {...anyProps}>
      <Text>Конкретное число</Text>
      <Input
        value={specificNumber}
        onChange={(e) => setSpecificNumber(Number(e.target.value))}
        disabled={!active}
        width={30}
        padding={"4px 10px"}
        defaultValue={1}
      />
    </StyledButtonWithInput>
  );
};
