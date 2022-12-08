import styled from "styled-components";

const Box = styled.div`
      width: 100%;
      height: 360px;
      border-radius: 30px;

      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      box-shadow: rgba(0, 0, 0, 0.35) 0px -75px 36px -28px inset;

      @media (max-width: 865px) {
            width: 70vw;
      }
`;

const ImageContainer = styled.div`
      width: 100%;
      height: 100%;
      border-radius: 20px;
      z-index: -1;
`;

const ImageSize = styled.img`
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
      z-index: -1;

      margin: 0;
      padding: 0;
`;

const AppartTitleBox = styled.div`
      width: 60%
      height: 40px;
      position: absolute;
      bottom: 15px;
      left: 20px;
     
`;

const AppartTitle = styled.span`
      color: white;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      font-size: 15px;
`;

function Article({ cover, title }) {
      return (
            <Box>
                  <AppartTitleBox>
                        <AppartTitle> {title} </AppartTitle>
                  </AppartTitleBox>
                  <ImageContainer>
                        <ImageSize src={cover} alt="logement" />
                  </ImageContainer>
            </Box>
      );
}

export default Article;
