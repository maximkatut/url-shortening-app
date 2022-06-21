import styled from "styled-components";

import NavLink from "./NavLink";

import { TABLET_WIDTH } from "../utils/variables";

const Nav = styled.nav`
  z-index: 10;
  display: block;
  position: absolute;
  width: 85%;
  top: 82px;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 10px 40px;
  text-align: center;
  border-radius: 10px;
  background-color: var(--bg-dark-blue);

  a {
    color: white;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }

  @media screen and (min-width: ${TABLET_WIDTH}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: static;
    width: 75%;
    padding: 0;
    margin: 0;
    background-color: rgba(0, 0, 0, 0);
    font-size: 16px;

    a {
      color: var(--bg-dark);
    }
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    position: static;
    width: 85%;
    margin: 0;
    padding: 0;
    color: black;
    background-color: rgba(0, 0, 0, 0);
    font-size: 16px;
  }
`;

const NavListFirst = styled.ul`
  padding-top: 30px;
  padding-bottom: 20px;

  @media screen and (min-width: ${TABLET_WIDTH}) {
    display: flex;
    margin: 0;
    padding: 0;
  }
`;

const NavListSecond = styled.ul`
  padding-top: 30px;
  border-top: 1px solid white;
  padding-bottom: 20px;

  @media screen and (min-width: ${TABLET_WIDTH}) {
    display: flex;
    margin: 0;
    padding: 0;
  }
`;

interface IProps {
  isVisible: boolean;
}

const NavList = ({ isVisible }: IProps) => {
  return (
    <>
      {isVisible && (
        <Nav>
          <NavListFirst>
            <NavLink>Features</NavLink>
            <NavLink>Pricing</NavLink>
            <NavLink>Resources</NavLink>
          </NavListFirst>
          <NavListSecond>
            <NavLink>Login</NavLink>
            <NavLink signup>Sign Up</NavLink>
          </NavListSecond>
        </Nav>
      )}
    </>
  );
};

export default NavList;
