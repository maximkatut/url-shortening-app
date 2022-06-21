import { useEffect, useState } from "react";
import styled from "styled-components";

import MenuToggle from "./MenuToggle";
import NavList from "./NavList";

import { TABLET_WIDTH } from "../utils/variables";

const HeaderBlock = styled.header`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
  font-size: 18px;

  @media screen and (min-width: ${TABLET_WIDTH}) {
    justify-content: space-between;
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  color: var(--color-text);
`;

const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleOnLoadWindow = () => {
    if (window.innerWidth >= 900) {
      setIsVisible(true);
    }

    if (window.innerWidth < 900) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("load", handleOnLoadWindow);
    window.addEventListener("resize", handleOnLoadWindow);
  }, []);

  return (
    <HeaderBlock>
      <Title>Shortly</Title>
      <MenuToggle {...{ setIsVisible, isVisible }} />
      <NavList {...{ isVisible }} />
    </HeaderBlock>
  );
};

export default Header;
