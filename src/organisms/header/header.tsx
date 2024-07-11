import { Text } from "@/atoms/text";
import { AuthContext } from "@/contexts/auth-context";
import { Auth } from "@/molecules/auth";
import { VersionModule } from "@/molecules/version-module";
import { useContext, useState } from "react";
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
  const { auth: isAuth } = useContext(AuthContext);
  return (
    <StyledHeader>
      <Text>Test Game</Text>
      {isAuth ? <VersionModule /> : <Auth />}
    </StyledHeader>
  );
};
