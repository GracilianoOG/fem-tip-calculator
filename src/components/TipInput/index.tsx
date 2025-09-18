import useInputData from "../../hooks/useInputData";
import useTipValues from "../../hooks/useTipValues";
import { InputStyled } from "../../styles/Input.styled";
import {
  integerValidation,
  validateInputElement,
} from "../../utils/formValidations";
import type { TipInputProps } from "./types";

const TipInput = ({ id, placeholder }: TipInputProps) => {
  const { setTip } = useTipValues();
  const { inputData, setInputData, setInputErrors } = useInputData();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    setInputData({ ...inputData, tip: input.value });

    for (const validation of integerValidation) {
      const [isInvalid, message] = validateInputElement(validation, input);

      if (isInvalid) {
        setInputErrors(prevErrors => ({
          ...prevErrors,
          tip: message as string,
        }));
        setTip(0);
        return;
      }
    }

    setInputErrors(prevErrors => ({ ...prevErrors, tip: "" }));
    setTip(parseFloat(input.value) * 0.01);
  };

  return (
    <InputStyled
      id={id}
      placeholder={placeholder}
      onChange={handleChange}
      value={inputData.tip}
    />
  );
};

export default TipInput;
