import styled from "styled-components";

import CopyButton from "./CopyButton";

import { IAdaptedData } from "../utils/dataAdapter";
import { TABLET_WIDTH } from "../utils/variables";

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
  margin-bottom: 16px;
  padding: 24px;
  font-size: 20px;
  background-color: #fff;
  border-radius: 8px;

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

interface ShortsProps {
  shorts: [] | IAdaptedData[];
}

const Shorts = ({ shorts }: ShortsProps) => {
  return (
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
  );
};

export default Shorts;
