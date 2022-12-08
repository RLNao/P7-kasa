import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderLogo from "../assets/.LOGO.svg";

const LogoContainer = styled.div`
      display: flex;
      align-items: center;

      width: 50%;
      height: 100%;
      @media (max-width: 865px) {
            width: 50%;
      }

      @media (max-width: 598px) {
            width: 40%;
      }
`;
const Logo = styled.img`
      height: 50px;

      @media (max-width: 865px) {
            width: 100%;
      }
`;

const NavigationContainer = styled.nav`
      height: 120px;
      width: 75%;
      display: flex;
      align-items: center;
      margin-left: auto;
      margin-right: auto;

      justify-content: space-between;
      @media (max-width: 865px) {
            height: 50px;
      }
`;

const LinkContainer = styled.div`
      display: flex;
      margin-right: 0px;
      width: 50%;
      justify-content: flex-end;
      white-space: nowrap;

      @media (max-width: 865px) {
            text-transform: uppercase;
            width: 50%;
      }
`;

const NavLinkContainer = styled.div`
      list-style-type: none;
      justify-content: space-between;
      display: flex;
      padding: 15px;
      font-size: 20px;

      width: 15%;

      @media (max-width: 865px) {
            text-transform: uppercase;
            font-size: 100%;
            width: 100%;
      }

      @media (max-width: 497px) {
            text-transform: uppercase;
            font-size: 90%;
            width: 100%;
      }

      @media (max-width: 447px) {
            text-transform: uppercase;
            font-size: 70%;
            width: 100%;
      }

      @media (max-width: 358px) {
            text-transform: uppercase;
            font-size: 50%;
            width: 100%;
      }
`;

const LinkStyle = styled(Link)`
      text-decoration: none;
      color: #ff6060;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
`;

function NavBar() {
      return (
            <NavigationContainer>
                  <LogoContainer>
                        <Logo src={HeaderLogo}></Logo>
                  </LogoContainer>
                  <LinkContainer>
                        <NavLinkContainer>
                              <LinkStyle to="/">Accueil</LinkStyle>
                        </NavLinkContainer>
                        <NavLinkContainer>
                              <LinkStyle to="/A-propos">A propos</LinkStyle>
                        </NavLinkContainer>
                  </LinkContainer>
            </NavigationContainer>
      );
}

export default NavBar;
