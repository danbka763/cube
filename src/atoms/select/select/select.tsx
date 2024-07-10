import { Inter } from "next/font/google";
import React from "react";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const StyledSelect = styled.select.attrs<{ $isOpen: boolean }>({})`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${({ $isOpen }) => ($isOpen ? "#3893FF" : "#CBD5E1")}; // меняем цвет border
  border-radius: 6px;
  appearance: none;
  background-color: white;

  &:focus {
    outline: none;
    border-color: #3893ff; // светло-голубая обводка при фокусе
  }
`;

interface IOption {
  value: string;
  label: string;
}

interface ISelectProps {
  options: IOption[];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleToggle: () => void;
  value: string;
  isOpen: boolean;
}

export const Select: React.FC<ISelectProps> = ({
  options,
  handleChange,
  handleToggle,
  value,
  isOpen,
}) => {
  return (
    <StyledSelect
      className={inter.className}
      value={value}
      onChange={handleChange}
      onClick={handleToggle}
      $isOpen={isOpen}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};
