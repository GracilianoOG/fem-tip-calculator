import useInputData from "../../hooks/useInputData";
import useTipValues from "../../hooks/useTipValues";
import LabeledInput from "../LabeledInput";
import TipMenu from "../TipMenu";
import dollarIcon from "../../assets/images/icon-dollar.svg";
import personIcon from "../../assets/images/icon-person.svg";
import { InputsWrapperStyled } from "./styles";
import {
  decimalValidation,
  integerValidation,
} from "../../utils/validations/formValidations";

const InputsPanel = () => {
  const { setBill, setPeople } = useTipValues();
  const { inputData, setInputData, inputErrors, setInputErrors } =
    useInputData();

  return (
    <InputsWrapperStyled>
      <LabeledInput
        id="price"
        label="Bill"
        iconSrc={dollarIcon}
        setValue={setBill}
        inputValue={inputData.bill}
        setInputValue={value => setInputData({ ...inputData, bill: value })}
        error={inputErrors.bill}
        setError={error => setInputErrors({ ...inputErrors, bill: error })}
        validations={decimalValidation}
      />
      <TipMenu label="Select Tip %" />
      <LabeledInput
        id="people"
        label="Number of People"
        iconSrc={personIcon}
        setValue={setPeople}
        inputValue={inputData.people}
        setInputValue={value => setInputData({ ...inputData, people: value })}
        error={inputErrors.people}
        setError={error => setInputErrors({ ...inputErrors, people: error })}
        validations={integerValidation}
      />
    </InputsWrapperStyled>
  );
};

export default InputsPanel;
