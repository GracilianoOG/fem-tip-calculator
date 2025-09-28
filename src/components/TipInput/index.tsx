import useInputData from "../../hooks/useInputData";
import useTipValues from "../../hooks/useTipValues";
import { InputStyled } from "../../styles/Input.styled";
import {
  integerValidation,
  validateInputElement,
} from "../../utils/validations/formValidations";
import type { TipInputProps } from "./types";

const TipInput = ({ id, placeholder }: TipInputProps) => {
  const { setTip } = useTipValues();
  const { inputData, setInputData, inputErrors, setInputErrors } =
    useInputData();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    setInputData({ ...inputData, tip: input.value });

    for (const validation of integerValidation) {
      const [isInvalid, message] = validateInputElement(validation, input);

      if (isInvalid) {
        setInputErrors(prevErrors => ({
          ...prevErrors,
          tip: message,
        }));
        setTip(0);
        return;
      }
    }

    setInputErrors(prevErrors => ({ ...prevErrors, tip: "" }));

    const tipPercent = parseInt(input.value) / 100;
    setTip(tipPercent);
  };

  return (
    <InputStyled
      id={id}
      placeholder={placeholder}
      onChange={handleChange}
      value={inputData.tip}
      $hasError={!!inputErrors.tip}
    />
  );
};

export default TipInput;
