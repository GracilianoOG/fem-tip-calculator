import type React from "react";
import { InputWithIconStyled, LabelStyled } from "./styles";
import type { LabeledInputProps } from "./types";
import { useRef } from "react";
import { validateInputElement } from "../../utils/formValidations";

const LabeledInput = ({
  id,
  label,
  placeholder,
  iconSrc,
  setValue,
  validations,
}: LabeledInputProps) => {
  const errorRef = useRef<HTMLSpanElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;

    for (const validation of validations) {
      const [isInvalid, message] = validateInputElement(validation, input);
      console.log(isInvalid, message);

      if (isInvalid && errorRef.current) {
        errorRef.current.textContent = message as string;
        setValue(0);
        return;
      }
    }

    if (errorRef.current) {
      errorRef.current.textContent = "";
    }

    setValue(parseFloat(input.value));
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <LabelStyled htmlFor={id}>{label}</LabelStyled>
        <span ref={errorRef} style={{ color: "red" }}></span>
      </div>
      <InputWithIconStyled
        id={id}
        $icon={iconSrc}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default LabeledInput;
