import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import bg from "../img/bg-shorten-desktop.svg";
import { TABLET_WIDTH } from "../utils/variables";
import { useState } from "react";

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

const Error = styled.p`
  text-align: center;
  color: var(--color-error);
`;

type Inputs = {
  url: string;
};

const schema = yup
  .object({
    url: yup
      .string()
      .matches(
        /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
        {
          excludeEmptyString: true,
        }
      )
      .required(),
  })
  .required();

const Form = () => {
  const [isLoading, setIsLoading] = useState<boolean>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <section>
      <FormBlock onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("url", { required: true })}
          placeholder="Shorten a link here..."
          type="text"
          disabled={isLoading}
        />
        <Button type="submit">Shorten It!</Button>
      </FormBlock>
      <Error>{errors.url && <span>This field is required and accepting only urls</span>}</Error>
    </section>
  );
};

export default Form;
