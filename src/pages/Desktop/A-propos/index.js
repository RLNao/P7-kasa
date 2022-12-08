import React from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import BannerSrc from "../../../assets/BackgroundSeconds.png";
import { BannerImg } from "../Home/index";
import { BannerContainer } from "../Home/index";

import styled from "styled-components";
import AccordionShort from "../../../components/NormalCollapse";

const AccordionContainerContainer = styled.div`
      height: 100%;
      display: flex;
      margin-top: 0;
      padding-top: 0;
      align-items: flex-start;
      margin-right: auto;
      margin-left: auto;
      flex-direction: column;
      margin-bottom: 20px;
      width: 75%;

      margin-bottom: 100px;
      margin-top: 30px;
`;

const AccordionContainer = styled.div`
      display: flex;
      justify-content: flex-start;
      margin-top: 0;
      padding-top: 0;
      margin-right: auto;
      margin-left: auto;
      flex-direction: column;
      margin-bottom: 20px;

      width: 75%;

      @media (max-width: 865px) {
            width: 90%;
      }
`;

function Apropos() {
      // const collapsetitle = props.title;
      // const collapsetext = props.text;

      return (
            <div>
                  <NavBar />
                  <BannerContainer>
                        <BannerImg src={BannerSrc} />
                  </BannerContainer>
                  <AccordionContainerContainer>
                        <AccordionContainer>
                              <AccordionShort
                                    title={"Fiabilité"}
                                    text={
                                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    }
                              ></AccordionShort>
                              <AccordionShort
                                    title={"Respect"}
                                    text={
                                          "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                                    }
                              ></AccordionShort>
                              <AccordionShort
                                    title={"Service"}
                                    text={
                                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    }
                              ></AccordionShort>
                              <AccordionShort
                                    title={"Responsabilité"}
                                    text={
                                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    }
                              ></AccordionShort>
                        </AccordionContainer>
                  </AccordionContainerContainer>

                  <Footer />
            </div>
      );
}

export default Apropos;
