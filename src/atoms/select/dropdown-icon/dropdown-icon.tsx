import React from "react";
import Image from "next/image";
import styled from "styled-components";

const StyledDropdownIcon = styled(Image).attrs<{ $isOpen: boolean }>({})`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%)
    rotate(${({ $isOpen }) => ($isOpen ? "0deg" : "180deg")}); // стрелка вверх/вниз
  transform-origin: center;
`;

interface IDropdownProps {
  isOpen: boolean;
}

export const DropdownIcon: React.FC<IDropdownProps> = ({ isOpen }) => {
  return (
    <StyledDropdownIcon
      src="./dropdown-icon.svg"
      alt="dropdown icon"
      $isOpen={isOpen}
      width={8}
      height={4}
    />
  );
};
