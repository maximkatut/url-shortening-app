import styled from "styled-components";

import { TABLET_WIDTH } from "../utils/variables";

const MainBlock = styled.section`
  overflow: hidden;
  position: relative;
  padding: 90px 0;

  @media screen and (max-width: ${TABLET_WIDTH}) {
    text-align: center;
  }
`;

const Title = styled.h1`
  width: 60%;
  padding-top: 48px;
  font-size: 80px;
  line-height: 90px;

  @media screen and (max-width: ${TABLET_WIDTH}) {
    width: 100%;
    margin-top: 245px;
    font-size: 40px;
    line-height: 44px;
    text-align: center;
  }
`;

const Description = styled.p`
  width: 50%;
  font-size: 22px;

  @media screen and (max-width: ${TABLET_WIDTH}) {
    width: 100%;
    margin-top: 18px;
    font-size: 18px;
    text-align: center;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin-top: 40px;
  padding: 15px 45px;
  font-size: 20px;
  color: white;
  font-weight: 700;
  background-color: var(--bg-cyan);
  border-radius: 40px;

  &:hover {
    background-color: var(--bg-cyan-light);
  }
`;

const Main = () => {
  return (
    <MainBlock>
      <Title>More than just shorter links</Title>
      <Description>
        Build your brand's recognition and get detailed insights on how your links are performing.
      </Description>
      <Button>Get Started</Button>
    </MainBlock>
  );
};

export default Main;
