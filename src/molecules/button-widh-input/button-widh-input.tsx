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

export const ButtonWithInput: React.FC<IButtonProps> = (props) => {
  const { active } = props;
  return (
    <StyledButtonWithInput {...props}>
      <Text>Конкретное число</Text>
      <Input
        disabled={!active}
        width={30}
        padding={"4px 10px"}
        defaultValue={1}
      />
    </StyledButtonWithInput>
  );
};
