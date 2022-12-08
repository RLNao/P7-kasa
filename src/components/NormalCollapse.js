import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Vector from "../assets/Vector.png";

const Collapse = styled.div`
      width: 100%;
      height: 100%;
      margin: 0px 10px;

      @media (max-width: 865px) {
            margin: 0px;
      }
`;

const ContentBox = styled.div`
      position: relative;
      margin-top: 10px;
      width: 100%;
      height: 100%;
      font-size: 20px;
`;

const LabelLogo = styled.img`

      background-repeat: no-repeat;
      height: 10px;
      position: absolute;
      top 40%;
      right: 20px;
      transform: translateY(-52%);
      width: 20px;
      
`;

const Label = styled.div`
      font-family: "Montserrat";
      position: relative;
      padding: 10px;
      background: #ff6060;
      color: white;
      cursor: pointer;
      border-radius: 5px;
      height: 25px;
      display: flex;
      align-items: center;

      @media (max-width: 865px) {
            height: 20px;
            margin-bottom: 15px;
      }
`;

const ContentContainer = styled.div`
      padding 10px;
      background: white;
      height: auto;
      color: #ff6060;
      font-family: "Montserrat";
      background: #f6f6f6;
`;

const Content = styled.div`
      font-size: 18px;
      height: auto;
`;

function AccordionShort(props) {
      const [show, setShow] = useState(false);
      // const [b, setA] = useState(0);

      const handleOpen = () => {
            setShow(!show);
            // setA(b + 1);
      };

      const collapsetitle = props.title;
      const collapsetext = props.text;

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
                                    <Content>{collapsetext}</Content>
                              </ContentContainer>
                        )}
                  </ContentBox>
            </Collapse>
      );
}

export default AccordionShort;

export { Collapse };
export { ContentBox };
export { Label };
export { LabelLogo };
export { ContentContainer };
export { Content };
