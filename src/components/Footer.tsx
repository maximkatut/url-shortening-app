import styled from "styled-components";
import SVG from "react-inlinesvg";
import logo from "../img/logo.svg";
import fb from "../img/icon-facebook.svg";
import ig from "../img/icon-instagram.svg";
import tw from "../img/icon-twitter.svg";
import pi from "../img/icon-pinterest.svg";
import { TABLET_WIDTH } from "../utils/variables";

const LISTS = [
  ["Features", "Link Shortening", "Branded Links", "Analytics"],
  ["Resources", "Blog", "Developers", "Support"],
  ["Company", "About", "Our Team", "Careers", "Contact"],
];

const SOCIAL_IMG = [fb, ig, tw, pi];

const FooterBlock = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: var(--color-text);
  margin: 0 -160px;
  padding: 52px 160px;

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
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--color-grey);
  :first-child {
    color: white;
    margin-bottom: 20px;
    font-weight: 700;

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
      <LogoImg src={logo} alt="Logo" />
      {LISTS.map((arr: string[], index) => {
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
