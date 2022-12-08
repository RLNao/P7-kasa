import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import appartList from "../data/logements.json";

const TagBox = styled.div`
      width: 100%;
      align-items: flex-start;
      display: flex;
      flex-wrap: wrap;
      margin-left: -1%;

      height: 80px;

      @media (max-width: 530px) {
            height: 70px;
      }
`;

const TagContainer = styled.div`
      background: #ff6060;
      width: auto;
      height: 28px;
      padding-left: 10px;
      padding-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 7px;
      color: white;
      margin: 5px;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      @media (max-width: 680px) {
            width: 35%;
      }

      @media (max-width: 450px) {
            width: auto;
      }
`;

function TagMaker({ tags }) {
      return <TagContainer>{tags}</TagContainer>;
}

function TagName() {
      let myid = useParams();

      let monId = appartList.find((element) => element.id === myid.id);

      const values = Object.values(monId.tags);
      // const entries = Object.entries(monId.tags);

      return (
            <TagBox>
                  {values.map((appart, index) => (
                        <TagMaker
                              key={`${appart.name}-${index}`}
                              tags={appart}
                        />
                  ))}
            </TagBox>
      );
}

export default TagName;
