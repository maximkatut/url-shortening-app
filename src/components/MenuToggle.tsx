import styled from "styled-components";

import burger from "../img/burger.svg";
import cross from "../img/cross.svg";

import { TABLET_WIDTH } from "../utils/variables";

const Button = styled.button`
  cursor: pointer;
  margin-left: auto;

  @media screen and (min-width: ${TABLET_WIDTH}) {
    display: none;
  }
`;

interface IProps {
  setIsVisible: (x: boolean) => void;
  isVisible: boolean;
}

const MenuToggle = ({ setIsVisible, isVisible }: IProps) => {
  return (
    <Button onClick={() => setIsVisible(!isVisible)}>
      <img src={isVisible ? cross : burger} alt="" />
    </Button>
  );
};

export default MenuToggle;
