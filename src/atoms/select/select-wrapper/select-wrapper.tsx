import React from "react";
import styled from "styled-components";

const StyledSelectWrapper = styled.div`
  position: relative;
  width: 100%; // можно настроить ширину по вашему усмотрению
`;

interface IProps {
  children: JSX.Element | JSX.Element[];
  setIsOpen: (value: boolean) => void;
}

export const SelectWrapper: React.FC<IProps> = ({ setIsOpen, children }) => {
  return (
    <StyledSelectWrapper onBlur={() => setIsOpen(false)}>
      {children}
    </StyledSelectWrapper>
  );
};
