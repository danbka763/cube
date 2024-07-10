import { Text } from "@/atoms/text";
import { Auth } from "@/molecules/auth";
import { VersionModule } from "@/molecules/version-module";
import { useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
`;

export const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <StyledHeader>
      <Text>Test Game</Text>
      {isAuth ? <VersionModule /> : <Auth />}
    </StyledHeader>
  );
};
