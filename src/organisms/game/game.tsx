import { Text } from "@/atoms/text";
import { DiceRoller } from "@/atoms/dice-roller";
import { useState } from "react";
import styled from "styled-components";
import { TextAndComponent } from "@/molecules/text-and-component";
import { SelectComponent } from "@/molecules/select";
import { SelectVariant } from "@/molecules/select-variant";
import { Button } from "@/atoms/button";

const StyledGameComponent = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  max-width: 338px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

const CreatingBetButton = styled(Button)`
  background-color: #37AC00;
  border-color: #55F30A;
`

export const Game = () => {
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      setRolling(false);
    }, 1000);
  };

  return (
    <StyledGameComponent>
      <Content>
        <Text>Сделайте ставку</Text>
        
        <DiceRoller rolling={rolling} />

        <TextAndComponent text="Размер ставки">
          <SelectComponent
            options={[
              { value: "1", label: "1.00" },
              { value: "2", label: "2.00" },
              { value: "3", label: "3.00" },
              { value: "5", label: "5.00" },
              { value: "10", label: "10.00" },
              { value: "25", label: "25.00" },
              { value: "60", label: "60.00" },
              { value: "100", label: "100.00" },
            ]}
            value={"2"}
            onChange={() => {}}
          />
        </TextAndComponent>

        <TextAndComponent text="Варианты ставок">
          <SelectVariant />
        </TextAndComponent>

        <CreatingBetButton>Сделать ставку</CreatingBetButton>
      </Content>
    </StyledGameComponent>
  );
};
