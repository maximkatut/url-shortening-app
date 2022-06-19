import illustrationWorking from "../img/illustration-working.svg";
import styled from "styled-components";
import { TABLET_WIDTH } from "../utils/variables";

const Div = styled.div`
  padding: 24px 24px 0 24px;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: ${TABLET_WIDTH}) {
    padding: 40px 160px 0 160px;
  }
`;

const Img = styled.img`
  width: 720px;
  position: absolute;
  right: -115px;
  top: 170px;
  z-index: -1;

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
