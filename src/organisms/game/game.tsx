import { Text } from "@/atoms/text";
import { DiceRoller } from "@/atoms/dice-roller";
import { useContext, useState } from "react";
import styled from "styled-components";
import { TextAndComponent } from "@/molecules/text-and-component";
import { SelectComponent } from "@/molecules/select";
import { SelectVariant } from "@/molecules/select-variant";
import { Button } from "@/atoms/button";
import { EVariant } from "@/model/variant";
import { getRandomIntArbitrary } from "@/utils/random";
import { AuthContext } from "@/contexts/auth-context";

const StyledGameComponent = styled.section<{ disabled: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > * {
    pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
    opacity: ${({ disabled }) => (disabled ? "50%" : 1)};
  }
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
  background-color: #37ac00;
  border-color: #55f30a;

  &:hover {
    background-color: #41ca00;
    border-color: #7dff3f;
  }
`;

export const Game: React.FC = () => {
  const disabled = !useContext(AuthContext).auth;
  
  const [rolling, setRolling] = useState(false);
  const [variant, setVariant] = useState(EVariant.none);
  const [bet, setBet] = useState(2);
  const [dots, setDots] = useState(1);

  const rollDice = () => {
    setRolling(true);
    const timeout = getRandomIntArbitrary(750, 1200);
    const interval = setInterval(() => {
      setDots(getRandomIntArbitrary(1, 6));
    }, 25);
    setTimeout(() => {
      clearInterval(interval);
      setRolling(false);
    }, timeout);
  };

  return (
    <StyledGameComponent disabled={disabled}>
      <Content>
        <Text fontSize={20}>Сделайте ставку</Text>

        <DiceRoller rolling={rolling} dots={dots} />

        <TextAndComponent text="Размер ставки">
          <SelectComponent
            options={[
              { value: 1, label: "1.00" },
              { value: 2, label: "2.00" },
              { value: 3, label: "3.00" },
              { value: 5, label: "5.00" },
              { value: 10, label: "10.00" },
              { value: 25, label: "25.00" },
              { value: 60, label: "60.00" },
              { value: 100, label: "100.00" },
            ]}
            value={bet}
            onChange={setBet}
          />
        </TextAndComponent>

        <TextAndComponent text="Варианты ставок">
          <SelectVariant controller={{ variant, setVariant }} />
        </TextAndComponent>

        <CreatingBetButton
          disabled={variant === EVariant.none}
          onClick={rollDice}
        >
          Сделать ставку
        </CreatingBetButton>
      </Content>
    </StyledGameComponent>
  );
};
