"use client";
import React, { ButtonHTMLAttributes, useState } from "react";
import styled from "styled-components";

const BaseButton = styled.button<{ $active?: boolean }>`
  width: 100%;
  border: 0;
  border-bottom: 1px solid;
  border-radius: 5px;
  gap: 10px;
  padding: 10px 16px;
  color: white;
  cursor: pointer;
  background-color: ${({ $active }) => ($active ? "#f6a200" : "#643f82")};
  border-color: ${({ $active }) => ($active ? "#d77400" : "#9159be")};

  &:hover {
    background-color: ${({ $active }) => ($active ? "#f6a200" : "#8151a8")};
    border-color: ${({ $active }) => ($active ? "#d77400" : "#ab69e2")};
  }

  &: $active {
    background: #f6a200;
    border-color: #d77400;
  }

  &:disabled {
    opacity: 30%;
    cursor: default;
  }

  font-size: 16px;
`;

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const Button = (props: IButtonProps) => {
  const { children, active, ...anyProps } = props;
  const [mouseDown, setMouseDown] = useState(false);

  return (
    <BaseButton
      $active={active || mouseDown}
      {...anyProps}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
    >
      {children}
    </BaseButton>
  );
};
