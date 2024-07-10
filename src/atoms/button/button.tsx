import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  border: 0;
  border-bottom: 1px solid;
  border-radius: 5px;
  gap: 10px;
  padding: 10px 16px;
  color: white;
  cursor: pointer;
  background-color: #643f82;
  border-color: #9159be;

  &:hover {
    background-color: #8151a8;
    border-color: #ab69e2;
  }
  &:active {
    background: #f6a200;
    border-color: #d77400;
  }
`;

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: IButtonProps) => {
  const { children, ...anyProps } = props;
  return <BaseButton {...anyProps}>{children}</BaseButton>;
};
