import styled from '@emotion/styled';
export const HomeSection = styled.section`
  position: relative;
  text-align: center;
  padding-top: 65px;
  padding-bottom: 50px;
  height: 700px;
  overflow: hidden;
`;
export const DecorImage = styled.img`
  position: absolute;
  z-index: 0;
  right: -2vw;
`;
export const Title = styled.h1`
  position: relative;
  top: 20px;
  color: #1565c0;
  font-family: 'Poppins', sans-serif;
  line-height: 1em;
  letter-spacing: -0.02em;
  text-shadow: 0px 0px 10px rgb(0 0 0 / 35%);
  font-weight: 700;
`;

export const BigTitleAccent = styled.span`
  position: absolute;
  z-index: 1;
  top: 230px;
  left: 15vw;
  display: block;
  font-size: 130px;
`;
