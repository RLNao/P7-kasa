import React from "react";

import { useState } from "react";
import { useParams } from "react-router-dom";
import appartList from "../data/logements.json";
import Vector from "../assets/Vector.png";
import styled from "styled-components";

// STYLE ELEMENTS //
import {
      Collapse,
      ContentBox,
      LabelLogo,
      Label,
      ContentContainer,
      Content,
} from "./NormalCollapse";
// STYLE ELEMENTS //

const EquipementsContain = styled.div`
      width: 100%;
`;

function EquipementsMaker({ equipments }) {
      return <EquipementsContain>{equipments}</EquipementsContain>;
}

function AccordionEquip(props) {
      const [show, setShow] = useState(false);

      const handleOpen = () => {
            setShow(!show);
      };

      const collapsetitle = props.title;

      let myid = useParams();
      console.log("USE PARAM INSIDE SLIDER :", myid);
      let monId = appartList.find((element) => element.id === myid.id);
      console.log("MY ID ONLY INSIDE SLIDER:", monId);

      const values = Object.values(monId.equipments);
      const entries = Object.entries(monId.equipments);
      console.log("values:", values);
      console.log("entries:", entries);

      return (
            <Collapse>
                  <ContentBox onClick={handleOpen}>
                        <Label>
                              <LabelLogo
                                    src={Vector}
                                    style={{
                                          transform: show
                                                ? "rotate(180deg)"
                                                : "rotate(0deg)",
                                    }}
                              />
                              {collapsetitle}
                        </Label>
                        {show && (
                              <ContentContainer>
                                    <Content>
                                          {values.map((appart, index) => (
                                                <EquipementsMaker
                                                      equipments={appart}
                                                />
                                          ))}
                                    </Content>
                              </ContentContainer>
                        )}
                  </ContentBox>
            </Collapse>
      );
}

export default AccordionEquip;
