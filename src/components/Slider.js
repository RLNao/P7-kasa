import React from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
      width: 100%;
      height: 370px;
      display: flex;
      flex-direction: column;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      border-radius: 25px;
      align-items: center;
      justify-content: center;
      margin-top: 20px;

      @media (max-width: 865px) {
            height: 280px;
      }
`;

const ImageSize = styled.img`
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 25px;
`;

function Slider(props) {
      const imageShow = props.img;

      return (
            <SliderContainer>
                  <ImageSize src={imageShow} alt="logement" />
            </SliderContainer>
      );
}

export default Slider;
