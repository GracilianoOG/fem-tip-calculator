import { InputWithIconStyled, LabelStyled } from "./styles";
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
      <InputWithIconStyled
        id={id}
        $icon={iconSrc}
        type="text"
        placeholder={placeholder}
      />
    </>
  );
};

export default LabeledInput;
