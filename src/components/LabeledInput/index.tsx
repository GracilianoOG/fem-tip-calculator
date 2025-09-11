import { InputStyled, LabelStyled } from "./styles";
import type { LabeledInputProps } from "./types";

const LabeledInput = ({
  id,
  label,
  placeholder,
  iconSrc,
}: LabeledInputProps) => {
  return (
    <>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputStyled $icon={iconSrc} type="text" placeholder={placeholder} />
    </>
  );
};

export default LabeledInput;
