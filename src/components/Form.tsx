import styled from "styled-components";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import bg from "../img/bg-shorten-desktop.svg";
import { regex, TABLET_WIDTH } from "../utils/variables";
import { useState } from "react";

import { api } from "../api";
import { dataAdapter, IAdaptedData } from "../utils/dataAdapter";

const FormBlock = styled.form`
  display: flex;
  position: relative;
  z-index: 10;
  margin-top: 50px;
  padding: 50px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--bg-dark-blue);
  border-radius: 10px;

  @media screen and (max-width: ${TABLET_WIDTH}) {
    display: block;
    margin-top: 0px;
    padding: 24px;
  }
`;

interface InputProps {
  error: FieldError | undefined;
}

const Input = styled.input<InputProps>`
  background-color: #fff;
  padding: 20px 50px;
  font-size: 22px;
  width: 75%;
  margin-right: 20px;
  border-radius: 10px;
  color: ${(props) => (props.error ? "var(--color-error)" : "")};

  :focus {
    outline: ${(props) => (props.error ? "1px solid var(--color-error)" : "")};
  }

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
  position: absolute;
  top: 10px;
  text-align: center;
  color: var(--color-error);

  @media screen and (max-width: ${TABLET_WIDTH}) {
    top: 0;
  }
`;

type Inputs = {
  url: string;
};

const schema = yup
  .object({
    url: yup
      .string()
      .matches(regex, {
        excludeEmptyString: true,
      })
      .required(),
  })
  .required();

interface FormProps {
  setShorts: (x: IAdaptedData) => void;
}

const Form = ({ setShorts }: FormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = ({ url }) => {
    setIsLoading(true);
    api()
      .get(url)
      .then((data) => {
        if (data.ok) {
          setShorts(dataAdapter(data.result));
          setIsLoading(false);
          resetField("url");
        }
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section>
      <FormBlock onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("url", { required: true })}
          placeholder="Shorten a link here..."
          type="text"
          error={errors.url}
          disabled={isLoading}
        />
        <Error>{errors.url && <span>This field is accepting only URLs</span>}</Error>
        <Button type="submit" disabled={isLoading}>
          Shorten It!
        </Button>
      </FormBlock>
    </section>
  );
};

export default Form;
