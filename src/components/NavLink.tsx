import { TABLET_WIDTH } from "../utils/variables";
import styled from "styled-components";

interface LiProps {
  signup?: boolean;
}

const NavLinkBlock = styled.li<LiProps>`
  padding: 15px 0;
  background-color: ${(props) => (props.signup ? "var(--bg-cyan)" : "none")};
  border-radius: ${(props) => (props.signup ? "40px" : "none")};

  &:hover {
    background-color: ${(props) => (props.signup ? "var(--bg-cyan-light)" : "none")};
  }

  @media screen and (min-width: ${TABLET_WIDTH}) {
    padding: 15px 10px;
  }

  @media screen and (min-width: 1200px) {
    padding: 15px 30px;
    background-color: ${(props) => (props.signup ? "var(--bg-cyan)" : "none")};
    border-radius: ${(props) => (props.signup ? "40px" : "none")};
  }
`;

interface IProps {
  children: React.ReactNode;
  signup?: boolean;
}

const NavLink = ({ children, signup }: IProps) => {
  return (
    <NavLinkBlock signup={signup}>
      <a href="/">{children}</a>
    </NavLinkBlock>
  );
};

export default NavLink;
