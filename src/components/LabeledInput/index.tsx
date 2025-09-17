import type React from "react";
import { InputWithIconStyled, LabelStyled } from "./styles";
import type { LabeledInputProps } from "./types";
import { useRef } from "react";
import {
  validateInputElement,
  type ValidationType,
} from "../../utils/formValidations";

const LabeledInput = ({
  id,
  label,
  placeholder,
  iconSrc,
  setValue,
}: LabeledInputProps) => {
  const errorRef = useRef<HTMLSpanElement | null>(null);

  const validations: ValidationType[] = [
    {
      type: "empty",
      message: "Can't be empty!",
    },
    {
      type: "notNumber",
      message: "Type a valid number!",
    },
    {
      type: "equalsZero",
      message: "Can't be zero!",
    },
    {
      type: "notPositive",
      message: "Type a positive number!",
    },
    {
      type: "notInteger",
      message: "Type a whole number!",
    },
  ];

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
    <>
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
    </>
  );
};

export default LabeledInput;
