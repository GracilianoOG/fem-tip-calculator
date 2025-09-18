import { LabelStyled } from "../../styles/Label.styled";
import { LabelMessageStyled, LabelWrapperStyled } from "./styles";
import type { LabelWithMessageProps } from "./types";

const LabelWithMessage = ({ id, label, message }: LabelWithMessageProps) => {
  return (
    <LabelWrapperStyled>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <LabelMessageStyled>{message}</LabelMessageStyled>
    </LabelWrapperStyled>
  );
};

export default LabelWithMessage;
