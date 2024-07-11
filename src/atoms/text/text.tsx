import { HTMLAttributes } from "react";
import styled from "styled-components";

const StyledText = styled.p<{ fontSize?: number }>`
  color: ${({ color }) => color || "#FFFFFF"};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "px" : "16px")};
`;

interface IProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: string | JSX.Element;
  color?: string;
  fontSize?: number;
}

export const Text = ({ children, ...anyProps }: IProps) => (
  <StyledText {...anyProps}>{children ?? ""}</StyledText>
);
