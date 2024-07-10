import React from "react";
import styled, { keyframes } from "styled-components";

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18.87px;
  margin: 34px;
  border-radius: 4.67px;
  border: 2px solid #42165D;
`;

const roll = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
`;

const Dice = styled.div<{ rolling: boolean }>`
  width: 92.26px;
  height: 92.26px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ rolling }) => (rolling ? roll : "none")} 1s linear infinite;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 50%;
`;

export const DiceRoller: React.FC<{ rolling: boolean }> = ({ rolling }) => {
  return (
    <DiceContainer>
      <div>
        <Dice rolling={rolling}>
          <Dot />
        </Dice>
      </div>
    </DiceContainer>
  );
};
