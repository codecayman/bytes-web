import React from "react";

// helpers
import styled from "styled-components";

// images
import BytesLogo from "../../../resources/images/logo/bytes-logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <LogoImg src={BytesLogo} />
        <LogoText>BYTES.</LogoText>
      </LogoWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 67px;
  padding-left: 25px;
  padding-top: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LogoImg = styled.img`
  height: 70px;
  width: auto;
`;

const LogoText = styled.div`
  font-weight: 500;
  font-size: 32px;
  letter-spacing: 1.3px;
  color: #6ac947;
`;

export default Header;
