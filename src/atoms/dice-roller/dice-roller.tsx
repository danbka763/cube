import { getRandomIntArbitrary } from "@/utils/random";
import React, { useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";

const getStylesByDots = (dots: number) => {
  switch (dots) {
    case 1:
      return `
        justify-content: center;
        align-items: center;
      `;
    case 2:
      return `
        justify-content: space-between;
        .dot:nth-of-type(2) { align-self: flex-end; }
      `;
    case 3:
      return `
        justify-content: space-between;
        .dot:nth-of-type(2) { align-self: center; }
        .dot:nth-of-type(3) { align-self: flex-end; }
      `;
    case 4:
      return `
        flex-wrap: wrap;
        gap: ${92.26 - 60}px;
      `;
    case 5:
      return `
        justify-content: space-between;
        align-items: space-between;
        flex-wrap: wrap;
        .dot:nth-of-type(2) { position: relative; top: calc(50% - 10px) }
        .dot:nth-of-type(4) { align-self: flex-end; }
        .dot:nth-of-type(5) { align-self: flex-end; }
      `;
    case 6:
      return `
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      `;
    default:
      return "";
  }
};

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18.87px;
  margin: 34px;
  border-radius: 4.67px;
  border: 2px solid #42165d;
`;

const roll = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
`;

const Dice = styled.div<{ rolling: boolean; dots: number }>`
  width: 92.26px;
  height: 92.26px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  padding: 10px;

  ${({ dots }) => getStylesByDots(dots)}

  animation: ${({ rolling }) => (rolling ? roll : "none")} 0.35s linear infinite;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 50%;
`;

interface IProps {
  rolling: boolean;
  dots: number;
  setDots: (dots: number) => void;
}

export const DiceRoller: React.FC<IProps> = ({ rolling, dots, setDots }) => {
  let dotsRender = [];

  for (let dot = 1; dot <= dots; dot++)
    dotsRender.push(<Dot className="dot" />);

  return (
    <DiceContainer>
      <div>
        <Dice rolling={rolling} dots={dots}>
          {dotsRender}
        </Dice>
      </div>
    </DiceContainer>
  );
};
