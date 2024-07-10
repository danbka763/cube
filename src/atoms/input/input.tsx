import { Inter } from "next/font/google";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid;
  padding: 8px 12px;
  border-color: #cbd5e1;
  border-radius: 6px;
  color: #00000080;

  &:focus {
    border-color: #3893ff;
  }
  &:disabled {
    border-color: #cbd5e1;
    opacity: 0.5;
  }
  &:error {
    border-color: #ff0000;
  }
`;

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: IInputProps) => {
  const { children, ...anyProps } = props;

  return (
    <StyledInput className={inter.className} {...anyProps}>
      {children}
    </StyledInput>
  );
};
