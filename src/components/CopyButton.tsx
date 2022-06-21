import { useState } from "react";
import styled from "styled-components";
import { copyToClipboard } from "../utils/copyToClipboard";
import { TABLET_WIDTH } from "../utils/variables";
import { Button } from "./Form";

interface ButtonProps {
  copied: boolean;
}

const ButtonBlock = styled(Button)<ButtonProps>`
  margin-left: 20px;
  font-size: 15px;
  padding: 10px 30px;
  border-radius: 4px;

  background-color: ${(props) => (props.copied ? "var(--bg-dark-blue)" : "var(--bg-cyan)")};

  @media screen and (max-width: ${TABLET_WIDTH}) {
    margin: 16px;
    margin-top: 0;
    width: 100%;
  }
`;

const CopyButton = ({ shortLink }: { shortLink: string }) => {
  const [copied, setCopied] = useState(false);

  const buttonClickHandler = () => {
    copyToClipboard(shortLink);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
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
