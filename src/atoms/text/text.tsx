import styled from "styled-components";

const StyledText = styled.p`
  color: ${({ color }) => color || "#FFFFFF"};
`;

interface IProps {
  children?: string | JSX.Element;
  color?: string;
}

export const Text = ({ children, color }: IProps) => (
  <StyledText color={color}>{children ?? ""}</StyledText>
);
