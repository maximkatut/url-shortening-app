import styled from "styled-components";
import SVG from "react-inlinesvg";

import logo from "../img/logo.svg";

import { TABLET_WIDTH } from "../utils/variables";
import { FOOTER_MENU, SOCIAL_IMG } from "../utils/const";

const FooterBlock = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 -160px;
  padding: 52px 160px;
  background-color: var(--color-text);

  @media screen and (max-width: ${TABLET_WIDTH}) {
    flex-wrap: wrap;
    align-items: center;
    margin: 0 -24px;
    padding: 60px 24px;
    text-align: center;
  }
`;

const LogoImg = styled.img`
  margin-right: 15%;

  @media screen and (max-width: ${TABLET_WIDTH}) {
    margin: 0 auto;
    margin-bottom: 24px;
  }
`;

const List = styled.ul`
  padding: 10px;
  color: white;
  @media screen and (max-width: ${TABLET_WIDTH}) {
    width: 100%;
    margin-bottom: 24px;
  }
`;

const Item = styled.li`
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--color-grey);
  :first-child {
    margin-bottom: 20px;
    font-weight: 700;
    color: white;

    a {
      color: white;
    }
  }

  a {
    color: var(--color-grey);
    &:hover {
      color: var(--bg-cyan);
    }
  }
`;

const SocialList = styled.ul`
  display: flex;

  @media screen and (max-width: ${TABLET_WIDTH}) {
    margin: 20px auto;
  }
`;

const SocialImg = styled(SVG)`
  padding: 10px;
  box-sizing: content-box;

  :hover {
    & path {
      fill: var(--bg-cyan);
    }
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <h2 className="visually-hidden">Footer</h2>
      <LogoImg src={logo} alt="Logo" />
      {FOOTER_MENU.map((arr: string[], index) => {
        return (
          <List key={index}>
            {arr.map((item, index) => {
              return (
                <Item key={index}>
                  <a href="/">{item}</a>
                </Item>
              );
            })}
          </List>
        );
      })}
      <SocialList>
        {SOCIAL_IMG.map((img, index) => {
          return (
            <li key={index}>
              <a href="/">
                <SocialImg src={img} />
              </a>
            </li>
          );
        })}
      </SocialList>
    </FooterBlock>
  );
};

export default Footer;
