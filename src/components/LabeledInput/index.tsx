import { InputStyled, LabelStyled } from "./styles";
import type { LabeledInputProps } from "./types";

const LabeledInput = ({ id, label, placeholder }: LabeledInputProps) => {
  return (
    <>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputStyled type="text" placeholder={placeholder} />
    </>
  );
};

export default LabeledInput;
