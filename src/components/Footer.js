import React from "react";
import styled from "styled-components";
import FooterLogo from "../assets/.LOGO-1.png";
import CopyrightsLogo from "../assets/.copyrights.svg";

const FooterContainer = styled.footer`
      background: #000000;
      width: 75%;
      height: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
`;

const Logo = styled.img`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 35px;
      margin-top: 50px;
      margin-bottom: 10px;
`;
const Copyrights = styled.img`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 15vw;
      height: 35px;
      margin-bottom: 10px;
      margin-top: 10px;
`;

function Footer() {
      return (
            <FooterContainer>
                  <Logo src={FooterLogo} />
                  <Copyrights src={CopyrightsLogo} />
            </FooterContainer>
      );
}

export default Footer;
