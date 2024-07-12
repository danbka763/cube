import { Inter } from "next/font/google";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const StyledInput = styled.input<{
  width?: string | number;
  $padding?: string | number;
  $borderColor?: string;
}>`
  width: ${({ width }) => {
    if (width) return width + (typeof width === "number" ? "px" : "");
    else return "100%";
  }};
  padding: ${({ $padding }) => {
    if ($padding) return $padding + (typeof $padding === "number" ? "px" : "");
    else return "8px 12px";
  }};
  border: 1px solid;
  border-color: ${({ $borderColor }) =>
    $borderColor ? $borderColor : "#cbd5e1"};
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

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  padding?: string | number;
  borderColor?: string;
}

export const Input = (props: IInputProps) => {
  const { children, padding, borderColor, ...anyProps } = props;

  return (
    <StyledInput
      $borderColor={borderColor}
      $padding={padding}
      className={inter.className}
      {...anyProps}
    >
      {children}
    </StyledInput>
  );
};
