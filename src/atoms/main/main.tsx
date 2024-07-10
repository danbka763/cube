import { Inter } from "next/font/google";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
`;

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export const Main: React.FC<IProps> = ({ children }) => (
  <StyledMain className={inter.className}>{children}</StyledMain>
);
