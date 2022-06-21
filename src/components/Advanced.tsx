import styled from "styled-components";

import Card from "./Card";
import Shorts from "./Shorts";

import { TABLET_WIDTH } from "../utils/variables";
import { IAdaptedData } from "../utils/dataAdapter";
import { CARDS } from "../utils/const";

const Section = styled.section`
  z-index: 1;
  position: relative;
  margin-left: -160px;
  margin-right: -160px;
  margin-top: -100px;
  background-color: rgb(191, 191, 191, 0.2);

  @media screen and (max-width: ${TABLET_WIDTH}) {
    margin-left: -24px;
    margin-right: -24px;
    padding-bottom: 80px;
  }
`;

const Title = styled.h2`
  margin-bottom: 18px;
  padding-top: 120px;
  font-size: 38px;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: ${TABLET_WIDTH}) {
    padding-top: 90px;
    font-size: 27px;
  }
`;

const Desc = styled.p`
  width: 37%;
  margin: 0 auto;
  font-size: 18px;
  text-align: center;

  @media screen and (max-width: ${TABLET_WIDTH}) {
    width: 100%;
    padding: 0 24px;
  }
`;

const Wrapper = styled.ul`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 100px 160px;

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    width: 60%;
    height: 8px;
    top: 280px;
    left: 20%;
    background-color: var(--bg-cyan);
  }

  @media screen and (max-width: ${TABLET_WIDTH}) {
    flex-wrap: wrap;
    padding: 24px;
    &:before {
      width: 8px;
      height: 780px;
      margin: 0 auto;
      top: 120px;
      left: 0;
      right: 0;
    }
  }
`;

interface AdvancedProps {
  shorts: [] | IAdaptedData[];
}

const CARD_MARGIN_OFFSET = 46;

const Advanced = ({ shorts }: AdvancedProps) => {
  return (
    <Section>
      <Shorts shorts={shorts} />
      <Title>Advanced Statistics</Title>
      <Desc>Track how your links are performing across the web with our advanced statistics dashboard.</Desc>
      <Wrapper>
        {CARDS.map((item, index) => {
          const style = { marginTop: `${0 + index * CARD_MARGIN_OFFSET}px` };
          return <Card key={index} title={item.title} desc={item.desc} style={style} img={item.image} />;
        })}
      </Wrapper>
    </Section>
  );
};

export default Advanced;
