import { InputWithIconStyled, LabelStyled } from "./styles";
import type { LabeledInputProps } from "./types";

const LabeledInput = ({
  id,
  label,
  placeholder,
  iconSrc,
  setValue,
}: LabeledInputProps) => {
  return (
    <>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputWithIconStyled
        id={id}
        $icon={iconSrc}
        type="text"
        placeholder={placeholder}
        onChange={e => setValue(parseFloat(e.target.value))}
      />
    </>
  );
};

export default LabeledInput;
