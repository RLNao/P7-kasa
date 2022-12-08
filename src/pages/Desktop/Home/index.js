import React from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import styled from "styled-components";
import BannerSrc from "../../../assets/Background.svg";
import Article from "../../../components/Article";
import appartList from "../../../data/logements.json";
import { Link } from "react-router-dom";

// Banner //
const BannerContainer = styled.div`
      height: 200px;
      width: 72%;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      margin-bottom: 30px;
      position: relative;

      @media (max-width: 865px) {
            flex-direction: column;
            height: 100px;
            margin-bottom: -10px;
      }
`;

const BannerImg = styled.img`
      height: 100%;
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      object-fit: cover;
      border-radius: 25px;
      filter: brightness(70%);

      @media (max-width: 865px) {
            border-radius: 10px;
      }
`;

const BannerTitleContainer = styled.div`
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;

      width: 100%;

      @media (max-width: 500px) {
            width: 90%;
            height: 50%;
            align-items: flex-start;
            flex-direction: column;
            margin: 0;
            padding: 0;
      }
`;

const BannerTitle = styled.h1`
      font-family: "Montserrat", sans-serif;

      font-weight: 400;
      font-size: 40px;
      margin: 0;
      padding: 0;
      @media (max-width: 865px) {
            font-size: 20px;
      }
`;

const BannerTitleSecond = styled.h1`
      font-family: "Montserrat", sans-serif;

      font-weight: 400;
      font-size: 40px;
      margin: 0;
      padding: 0;
      @media (max-width: 865px) {
            font-size: 20px;
      }
`;

// Article //

const ArticleAndLinkContainer = styled.div`
      width: 75%;
      height: auto;
      display: flex;
      justifycontent: center;
      align-items: center;
      flex-wrap: wrap;
      padding-top: 20px;
      margin-right: auto;
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 865px) {
            flex-direction: column;
      }
`;

const ArticleSize = styled.div`
      width: 30%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px;
      flex-wrap: wrap;

      @media (max-width: 865px) {
            width: 100%;
            margin: 0px;
            margin-top: 15px;
      }
`;

function Home() {
      return (
            <div>
                  <NavBar />
                  <BannerContainer>
                        <BannerImg src={BannerSrc} />
                        <BannerTitleContainer>
                              <BannerTitle>Chez vous,</BannerTitle>
                              <BannerTitleSecond>
                                    partout et ailleurs
                              </BannerTitleSecond>
                        </BannerTitleContainer>
                  </BannerContainer>
                  <ArticleAndLinkContainer>
                        {appartList.map((appart, index) => (
                              <ArticleSize key={`${appart.name}-${index}`}>
                                    <Link to={`/Fiche-Logement/${appart.id}`}>
                                          <Article
                                                key={`${appart.name}-${index}`}
                                                title={appart.title}
                                                cover={appart.cover}
                                          />
                                    </Link>
                              </ArticleSize>
                        ))}
                  </ArticleAndLinkContainer>
                  <Footer />
            </div>
      );
}

export default Home;
export { BannerContainer, BannerImg };
