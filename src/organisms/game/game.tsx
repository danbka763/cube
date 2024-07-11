import { Text } from "@/atoms/text";
import { DiceRoller } from "@/atoms/dice-roller";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { TextAndComponent } from "@/molecules/text-and-component";
import { SelectComponent } from "@/molecules/select";
import { SelectVariant } from "@/molecules/select-variant";
import { Button } from "@/atoms/button";
import { EVariant } from "@/model/variant";
import { getRandomIntArbitrary } from "@/utils/random";
import { UserContext } from "@/contexts/user-context";
import { calculateWin } from "@/utils/calculate-win";

const StyledGameComponent = styled.section<{ disabled: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > * > * {
    pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
    opacity: ${({ disabled }) => (disabled ? "50%" : 1)};
  }

  & > * > .center-text {
    opacity: 1;
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
  const { auth, changeWallet } = useContext(UserContext);
  const disabled = !auth;

  const [rolling, setRolling] = useState(false);
  const [variant, setVariant] = useState(EVariant.none);
  const [specificNumber, setSpecificNumber] = useState(1);
  const [bet, setBet] = useState(1);
  const [dots, setDots] = useState(1);
  const [firstStart, setFirstStart] = useState(true);
  const [win, setWin] = useState<number>();

  const rollDice = () => {
    setFirstStart(false);
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

  const calculate = useCallback(() => {
    const result = calculateWin(bet, dots, variant, specificNumber);
    console.log({ bet, dots, variant, specificNumber });
    setWin(result);
    changeWallet(result);
  }, [bet, dots, variant, specificNumber]);

  useEffect(() => {
    if (!rolling && !firstStart) {
      console.log(rolling, firstStart);
      console.count();
      calculate();
    }
  }, [rolling, firstStart]);

  let text = "Войдите, чтобы продолжить";
  let smallText;

  if (auth) {
    if (win === undefined) {
      text = "Сделайте ставку";
    } else {
      text = `Результат броска кубика: ${dots}`;

      if (win > 0) {
        smallText = `Вы выиграли ${win} TND!`;
      } else {
        smallText = "Повезёт в следующий раз!";
      }
    }
  }

  return (
    <StyledGameComponent disabled={disabled}>
      <Content>
        <Text className="center-text" fontSize={20}>
          {text}
        </Text>
        {smallText && !rolling && <Text fontSize={16}>{smallText}</Text>}

        <DiceRoller rolling={rolling} dots={dots} />

        <TextAndComponent text="Размер ставки">
          <SelectComponent
            options={[
              { value: 1, label: "1.00" },
              { value: 5, label: "5.00" },
              { value: 10, label: "10.00" },
              { value: 15, label: "15.00" },
              { value: 20, label: "20.00" },
            ]}
            value={bet}
            onChange={setBet}
          />
        </TextAndComponent>

        <TextAndComponent text="Варианты ставок">
          <SelectVariant
            controller={{ variant, setVariant }}
            specific={{ specificNumber, setSpecificNumber }}
          />
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
