import illustrationWorking from "../img/illustration-working.svg";
import styled from "styled-components";
import { TABLET_WIDTH } from "../utils/variables";

const Div = styled.div`
  overflow: hidden;
  position: relative;
  padding: 24px 24px 0 24px;

  @media screen and (min-width: ${TABLET_WIDTH}) {
    padding: 40px 80px 0 80px;
  }

  @media screen and (min-width: 1150px) {
    padding: 40px 160px 0 160px;
  }
`;

const Img = styled.img`
  z-index: -1;
  position: absolute;
  width: 720px;
  right: -115px;
  top: 170px;

  @media screen and (max-width: ${TABLET_WIDTH}) {
    width: 500px;
    right: -140px;
    top: 110px;
  }
`;

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <Div>
      <Img src={illustrationWorking} alt="working" />
      {children}
    </Div>
  );
};

export default Layout;
