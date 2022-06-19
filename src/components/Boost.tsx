import styled from "styled-components";
import boostImg from "../img/bg-boost-desktop.svg";
import { Button } from "./Main";
import { TABLET_WIDTH } from "../utils/variables";

const BoostBlock = styled.section`
  padding: 70px 0;
  background-image: url(${boostImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--bg-dark-blue);
  margin: 0 -160px;
  text-align: center;

  @media screen and (max-width: ${TABLET_WIDTH}) {
    margin: 0 -24px;
  }
`;

const ButtonS = styled(Button)`
  margin-top: 22px;
`;

const Title = styled.h2`
  color: white;
  font-size: 38px;
  text-align: center;

  @media screen and (max-width: ${TABLET_WIDTH}) {
    font-size: 27px;
  }
`;

const Boost = () => {
  return (
    <BoostBlock>
      <Title>Boost your links today</Title>
      <ButtonS>Get Started</ButtonS>
    </BoostBlock>
  );
};

export default Boost;
