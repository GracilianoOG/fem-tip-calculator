import type React from "react";
import { InputWithIconStyled } from "./styles";
import type { LabeledInputProps } from "./types";
import { validateInputElement } from "../../utils/formValidations";
import LabelWithMessage from "../LabelWithMessage";

const LabeledInput = ({
  id,
  label,
  placeholder,
  iconSrc,
  setValue,
  inputValue,
  setInputValue,
  error,
  setError,
  validations,
}: LabeledInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    setInputValue(input.value);

    for (const validation of validations) {
      const [isInvalid, message] = validateInputElement(validation, input);

      if (isInvalid) {
        setError(message as string);
        setValue(0);
        return;
      }
    }

    setError("");
    setValue(parseFloat(input.value));
  };

  return (
    <div>
      <LabelWithMessage id={id} label={label} message={error} />
      <InputWithIconStyled
        id={id}
        $icon={iconSrc}
        type="text"
        placeholder={placeholder ?? "0"}
        onChange={handleChange}
        value={inputValue}
      />
    </div>
  );
};

export default LabeledInput;
