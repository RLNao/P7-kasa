import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

import { Link } from "react-router-dom";

const Box = styled.div`
      width: 75%;
      display: flex;

      height: 70vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
`;

const ErrorContainer = styled.div`
      display: flex;

      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
`;

const ErrorTitle = styled.h1`
      color: #ff6060;
      font-size: 10vw;

      margin: 0px;
      font-family: "Montserrat";
      font-style: bold;
      font-weight: 600;
      text-align: center;
`;

const ErrorDesc = styled.h5`
      color: #ff6060;
      font-size: 2.5vh;
      text-align: center;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
`;

function Error() {
      return (
            <div>
                  <NavBar></NavBar>
                  <Box>
                        <ErrorContainer>
                              <ErrorTitle>404</ErrorTitle>
                              <ErrorDesc>
                                    Oups! La page que vous demandez n'existe
                                    pas.
                              </ErrorDesc>
                              <Link
                                    style={{
                                          textDecoration: "none",
                                          color: "#FF6060",
                                          fontFamily: "Montserrat",
                                          fontStyle: "normal",
                                          fontWeight: "500",
                                          textDecorationLine: "underline",
                                    }}
                                    to="/"
                              >
                                    Retourner sur la page d'accueil
                              </Link>
                        </ErrorContainer>
                  </Box>
            </div>
      );
}

export default Error;
