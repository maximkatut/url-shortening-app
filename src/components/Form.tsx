import styled from "styled-components";
import bg from "../img/bg-shorten-desktop.svg";
import { TABLET_WIDTH } from "../utils/variables";

const FormBlock = styled.form`
  z-index: 10;
  margin-top: 50px;
  padding: 50px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--bg-dark-blue);
  border-radius: 10px;

  @media screen and (max-width: ${TABLET_WIDTH}) {
    margin-top: 0px;
    padding: 24px;
  }
`;

const Input = styled.input`
  background-color: #fff;
  padding: 20px 50px;
  font-size: 22px;
  width: 77%;
  margin-right: 20px;
  border-radius: 10px;

  @media screen and (max-width: ${TABLET_WIDTH}) {
    padding: 12px;
    width: 100%;
    font-size: 18px;
    border-radius: 6px;
  }
`;

export const Button = styled.button`
  background-color: var(--bg-cyan);
  font-size: 22px;
  font-weight: 700;
  color: white;
  padding: 20px 40px;
  border-radius: 10px;

  &:hover {
    background-color: var(--bg-cyan-light);
    cursor: pointer;
  }

  @media screen and (max-width: ${TABLET_WIDTH}) {
    width: 100%;
    margin-top: 18px;
    padding: 12px;
    font-size: 18px;
  }
`;

const Form = () => {
  return (
    <section>
      <FormBlock onSubmit={() => alert(222)}>
        <Input placeholder="Shorten a link here..." />
        <Button type="submit">Shorten It!</Button>
      </FormBlock>
    </section>
  );
};

export default Form;
