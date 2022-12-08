import React from "react";
import NavBar from "../../../components/NavBar";
import Slider from "../../../components/Slider";
import appartList from "../../../data/logements.json";
import styled from "styled-components";
import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import Vector from "../../../assets/Vector.svg";
import EmptyStar from "../../../assets/EmptyStar.png";
import FullStar from "../../../assets/FullStar.png";
import AccordionShort from "../../../components/NormalCollapse";
import AccordionEquip from "../../../components/CollapseEquipments";
import TagName from "../../../components/TagName";
import Footer from "../../../components/Footer";

const SliderCont = styled.div`
      width: 75%;
      height: 100%;
      display: flex;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      margin-bottom: 15px;
`;

const LeftArrow = styled.div`
      background: url(${Vector});
      background-repeat: no-repeat;
      position: absolute;
      background-size: 90px;
      top: 40%;
      left: 0%;
      color: white;
      z-index: 1;
      height: 60px;
      width: 100px;
      rotate: -90deg;

      cursor: pointer;

      @media (max-width: 865px) {
            background-size: 40px;
            top: 40%;
            left: 15px;
            width: 50px;
      }
`;

const RightArrow = styled.div`
      background: url(${Vector});
      background-repeat: no-repeat;
      position: absolute;
      background-size: 90px;
      top: 40%;
      right: 0%;
      color: white;
      z-index: 1;
      height: 60px;
      width: 100px;
      rotate: 90deg;
      cursor: pointer;

      @media (max-width: 865px) {
            background-size: 40px;
            top: 40%;
            right: 15px;
            width: 50px;
      }
`;

const InfoContainer = styled.div`
      display: flex;
      margin-left: auto;
      margin-right: auto;
      width: 74%;
      height: auto;

      flex-direction: row;

      position: relative;
      justify-content: space-between;

      @media (max-width: 1064px) {
            flex-direction: column;
            height: auto;
            justify-content: center;
      }
`;

// Contient Nom appart / Location / Tags
const InfoContainerSecond = styled.div`
      display: flex;
      width: 50%;
      flex-direction: column;

      @media (max-width: 1064px) {
            width: 100%;
            height: auto;
      }
`;
// Contient Nom / Etoile / Picture
const InfoContainerThird = styled.div`
      display: flex;
      flex-direction: column;
      width: 50%;

      align-items: flex-end;

      @media (max-width: 1064px) {
            height: auto;
            width: 100%;
            justify-content: center;
      }
`;

const AccordionContainer = styled.div`
      display: flex;
      height: 100%;
      width: 75%;
      margin-left: auto;
      margin-right: auto;

      padding-bottom: 50px;

      @media (max-width: 865px) {
            flex-wrap: wrap;
      }
`;

const TitleContainer = styled.div`
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 1.5em;
      color: #ff6060;
      white-space: nowrap;
      margin-bottom: 10px;

      @media (max-width: 865px) {
            width: 100%;
            font-size: 1.2em;
            white-space: normal;
            height: 50px;
      }
`;
const LocationContainer = styled.div`
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 1em;
      margin-bottom: 10px;
      color: #ff6060;
`;

const HostNameAndPictureContainer = styled.div`
      display: flex;

      width: 155px;

      margin-bottom: 50px;
      justify-content: space-between;

      @media (max-width: 1064px) {
            width: 160px;
      }

      @media (max-width: 545px) {
            margin-top: 15px;
      }
`;

const NameContainer = styled.div`
      color: #ff6060;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 1.2em;
      width: 4.5em;

      height: 50%;
`;

const PictureContainer = styled.div`
      @media (max-width: 1064px) {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
      }
`;

const PictureContainerTest = styled.img`
      width: 50px;
      height: 50px;
      margin-bottom: 0px;
      border-radius: 30px;
      @media (max-width: 865px) {
            height: 100%;
      }
`;

const FullStarRatingContainer = styled.div`
      width: 200px;
      height: 50px;
      display: flex;
      right: -4%;
      position: absolute;
      bottom: 0;
      top: 45%;

      @media (max-width: 1064px) {
            width: 200px;
            justify-content: flex-start;
            align-items: flex-start;
            top: 60%;
            left: 0;
      }
      @media (max-width: 545px) {
            top: 65%;
      }

      @media (max-width: 423px) {
            top: 70%;
      }
`;

const EmptyStarRatingContainer = styled.div`
      width: 200px;
      height: 50px;
      right: -4%;
      display: flex;
      position: absolute;
      bottom: 0;
      top: 45%;
      z-index: -1;

      @media (max-width: 1064px) {
            width: 200px;
            top: 60%;
            left: 0;
      }

      @media (max-width: 545px) {
            top: 65%;
      }

      @media (max-width: 423px) {
            top: 70%;
      }
`;

const RatingContainerTest = styled.img`
      width: 20px;
      height: 20px;
      display: flex;

      @media (max-width: 865px) {
            height: 100%;
            width: 100%;
      }
`;

const StarMakerContainer = styled.div`
      height: 30px;
      width: 30px;

      @media (max-width: 423px) {
            height: 15px;
            width: 15px;
      }
`;

function FicheLogement() {
      let myid = useParams();

      let mycurrentappart = appartList.find(
            (element) => element.id === myid.id
      );

      const [current, setCurrent] = useState(0);

      if (mycurrentappart === undefined) {
            return <Navigate to="/ferfzejfzjf"></Navigate>;
      }

      const length = mycurrentappart.pictures.length;

      const leftSlide = () => {
            setCurrent(current === 0 ? length - 1 : current - 1);

            console.log(current);
      };

      function rightSlide() {
            setCurrent(current === length - 1 ? 0 : current + 1);

            console.log(current);
      }

      const starlength = mycurrentappart.rating;
      const starvalue = Object.values(mycurrentappart.rating);
      console.log("voici starvalue=", starvalue);
      console.log("voici starlenght=", starlength);

      ////////// STARS //////////

      let arr = [];
      let arrfive = [1, 2, 3, 4, 5];

      for (let i = 0; i < starlength; i++) arr.push(i + 1);
      console.log("voici tableau:", arr);

      function FullStarMaker() {
            return (
                  <StarMakerContainer>
                        <RatingContainerTest
                              src={FullStar}
                        ></RatingContainerTest>
                  </StarMakerContainer>
            );
      }

      function EmptyStarMaker() {
            return (
                  <StarMakerContainer>
                        <RatingContainerTest
                              src={EmptyStar}
                        ></RatingContainerTest>
                  </StarMakerContainer>
            );
      }

      ////////// STARS //////////

      return (
            <div>
                  <NavBar></NavBar>
                  <SliderCont>
                        <RightArrow onClick={rightSlide}></RightArrow>
                        <LeftArrow onClick={leftSlide}></LeftArrow>
                        <Slider img={mycurrentappart.pictures[current]} />
                  </SliderCont>

                  <InfoContainer>
                        <InfoContainerSecond>
                              <TitleContainer>
                                    {mycurrentappart.title}{" "}
                              </TitleContainer>
                              <LocationContainer>
                                    {mycurrentappart.location}
                              </LocationContainer>
                              <TagName></TagName>
                        </InfoContainerSecond>

                        <InfoContainerThird>
                              <HostNameAndPictureContainer>
                                    <NameContainer>
                                          {mycurrentappart.host.name}
                                    </NameContainer>
                                    <PictureContainer>
                                          <PictureContainerTest
                                                src={
                                                      mycurrentappart.host
                                                            .picture
                                                }
                                                alt="logement"
                                          />
                                    </PictureContainer>
                              </HostNameAndPictureContainer>
                              <FullStarRatingContainer></FullStarRatingContainer>
                              <FullStarRatingContainer>
                                    {arr.map((appart, index) => (
                                          <FullStarMaker
                                                key={`${appart.name}-${index}`}
                                          />
                                    ))}
                              </FullStarRatingContainer>
                              <EmptyStarRatingContainer>
                                    {arrfive.map((appart, index) => (
                                          <EmptyStarMaker
                                                key={`${appart.name}-${index}`}
                                          />
                                    ))}
                              </EmptyStarRatingContainer>
                        </InfoContainerThird>
                  </InfoContainer>
                  <AccordionContainer>
                        <AccordionShort
                              title={"Description"}
                              text={mycurrentappart.description}
                        ></AccordionShort>
                        <AccordionEquip title={"Equipements"}></AccordionEquip>
                  </AccordionContainer>
                  <Footer></Footer>
            </div>
      );
}

export default FicheLogement;
