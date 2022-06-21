import { useState } from "react";
import styled from "styled-components";

import { Button } from "./Form";

import { copyToClipboard } from "../utils/copyToClipboard";
import { TABLET_WIDTH } from "../utils/variables";

interface ButtonProps {
  copied: boolean;
}

const ButtonBlock = styled(Button)<ButtonProps>`
  margin-left: 20px;
  padding: 10px 30px;
  font-size: 15px;
  border-radius: 4px;
  background-color: ${(props) => (props.copied ? "var(--bg-dark-blue)" : "var(--bg-cyan)")};

  @media screen and (max-width: ${TABLET_WIDTH}) {
    width: 100%;
    margin: 16px;
    margin-top: 0;
  }
`;

const TIME_RESET_BUTTON = 3000;

const CopyButton = ({ shortLink }: { shortLink: string }) => {
  const [copied, setCopied] = useState(false);

  const buttonClickHandler = () => {
    copyToClipboard(shortLink);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, TIME_RESET_BUTTON);
  };

  return (
    <ButtonBlock
      copied={copied}
      onClick={() => {
        buttonClickHandler();
      }}
    >
      {copied ? "Copied!" : "Copy"}
    </ButtonBlock>
  );
};

export default CopyButton;
