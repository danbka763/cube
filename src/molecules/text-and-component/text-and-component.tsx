import { Text } from "@/atoms/text";
import { SelectComponent } from "../select";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
`;

interface IProps {
  children: JSX.Element;
  text: string;
}

export const TextAndComponent: React.FC<IProps> = ({ text, children }) => {
  return (
    <Content>
      <Text>{text}</Text>
      {children}
    </Content>
  );
};
