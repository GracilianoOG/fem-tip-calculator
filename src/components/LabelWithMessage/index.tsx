import { LabelStyled } from "../../styles/Label.styled";
import { LabelMessageStyled, LabelWrapperStyled } from "./styles";
import type { LabelWithMessageProps } from "./types";

const LabelWithMessage = ({
  id,
  label,
  messageElRef,
}: LabelWithMessageProps) => {
  return (
    <LabelWrapperStyled>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <LabelMessageStyled ref={messageElRef}></LabelMessageStyled>
    </LabelWrapperStyled>
  );
};

export default LabelWithMessage;
