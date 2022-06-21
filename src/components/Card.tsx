import styled from "styled-components";
import { TABLET_WIDTH } from "../utils/variables";

interface LiProps {
  img: string;
}

const CardBlock = styled.li<LiProps>`
  width: 32%;
  padding: 80px 40px 40px 40px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  text-align: center;

  &:before {
    content: "";
    position: absolute;
    width: 90px;
    height: 90px;
    top: -45px;
    left: 35px;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: 50%;
    background-color: var(--bg-dark-blue);
    border-radius: 50%;
  }

  @media screen and (max-width: ${TABLET_WIDTH}) {
    width: 100%;
    margin-top: 75px !important;
    padding: 80px 20px 40px 20px;

    &:before {
      right: 0;
      left: 0;
      margin: 0 auto;
    }
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 22px;
`;

const Desc = styled.h2`
  font-size: 15px;
  font-weight: 500;
  line-height: 27px;
  color: var(--color-grey);
`;

interface IProps {
  title: string;
  desc: string;
  style: object;
  img: string;
}

const Card = ({ title, desc, style, img }: IProps) => {
  return (
    <CardBlock style={style} img={img}>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </CardBlock>
  );
};

export default Card;
