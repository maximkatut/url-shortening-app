import styled from "styled-components";
import Card from "./Card";
import { TABLET_WIDTH } from "../utils/variables";

import recognition from "../img/icon-brand-recognition.svg";
import records from "../img/icon-detailed-records.svg";
import custom from "../img/icon-fully-customizable.svg";

const CARDS = [
  {
    title: "Brand Recognition",
    desc: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    image: recognition,
  },
  {
    title: "Detailed Records",
    desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    image: records,
  },
  {
    title: "Fully Customizable",
    desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    image: custom,
  },
];

const Section = styled.section`
  position: relative;
  z-index: -1;
  background-color: rgb(191, 191, 191, 0.2);
  margin-left: -160px;
  margin-right: -160px;
  margin-top: -80px;
  padding-top: 200px;

  @media screen and (max-width: ${TABLET_WIDTH}) {
    padding-top: 170px;
    padding-bottom: 80px;
    margin-left: -24px;
    margin-right: -24px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 18px;

  @media screen and (max-width: ${TABLET_WIDTH}) {
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
  }
`;

const Wrapper = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 100px 160px;

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 600px;
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
      top: 370px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
`;

const Advanced = () => {
  return (
    <Section>
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
