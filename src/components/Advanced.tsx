import styled from "styled-components";
import Card from "./Card";
import { TABLET_WIDTH } from "../utils/variables";

import { IAdaptedData } from "../utils/dataAdapter";
import { CARDS } from "../utils/const";
import CopyButton from "./CopyButton";

const Section = styled.section`
  position: relative;
  z-index: 1;
  background-color: rgb(191, 191, 191, 0.2);
  margin-left: -160px;
  margin-right: -160px;
  margin-top: -100px;

  @media screen and (max-width: ${TABLET_WIDTH}) {
    padding-bottom: 80px;
    margin-left: -24px;
    margin-right: -24px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  padding-top: 120px;
  margin-bottom: 18px;

  @media screen and (max-width: ${TABLET_WIDTH}) {
    padding-top: 90px;
    font-size: 27px;
  }
`;

const Desc = styled.p`
  margin: 0 auto;
  font-size: 18px;
  text-align: center;
  width: 37%;

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
    top: 280px;
    left: 20%;
    width: 60%;
    height: 8px;
    background-color: var(--bg-cyan);
  }

  @media screen and (max-width: ${TABLET_WIDTH}) {
    padding: 24px;
    flex-wrap: wrap;
    &:before {
      width: 8px;
      height: 780px;
      top: 120px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
`;

const ShortsBlock = styled.ul`
  margin: 20px 160px;
  padding-top: 100px;

  @media screen and (max-width: ${TABLET_WIDTH}) {
    margin: 20px 24px;
  }
`;

const Shorty = styled.li`
  display: flex;
  align-items: center;
  padding: 24px;
  font-size: 20px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 16px;

  p:nth-child(2) {
    margin-left: auto;
  }

  a {
    color: var(--bg-cyan);
  }

  @media screen and (max-width: ${TABLET_WIDTH}) {
    flex-wrap: wrap;
    font-size: 16px;
    padding: 0;

    p {
      width: 100%;
      padding: 16px;
      font-weight: 700;
      border-bottom: 1px solid var(--color-grey);
    }

    p:nth-child(2) {
      font-weight: 500;
      border-bottom: none;
    }
  }
`;

interface AdvancedProps {
  shorts: [] | IAdaptedData[];
}

const Advanced = ({ shorts }: AdvancedProps) => {
  return (
    <Section>
      <ShortsBlock>
        {shorts.map((short) => (
          <Shorty key={short.code}>
            <p>{short.originalLink}</p>
            <p>
              <a href={short.link}>{short.shortLink}</a>
            </p>
            <CopyButton shortLink={short.link} />
          </Shorty>
        ))}
      </ShortsBlock>
      <Title>Advanced Statistics</Title>
      <Desc>Track how your links are performing across the web with our advanced statistics dashboard.</Desc>
      <Wrapper>
        {CARDS.map((item, index) => {
          const style = { marginTop: `${0 + index * 46}px` };
          return <Card key={index} title={item.title} desc={item.desc} style={style} img={item.image} />;
        })}
      </Wrapper>
    </Section>
  );
};

export default Advanced;
