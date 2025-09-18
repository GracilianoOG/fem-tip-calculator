import LabeledInput from "../LabeledInput";
import ResultPanel from "../ResultPanel";
import TipMenu from "../TipMenu";
import dollarIcon from "../../assets/images/icon-dollar.svg";
import personIcon from "../../assets/images/icon-person.svg";
import { AppWrapperStyled, InputsWrapper } from "./styles";
import useTipValues from "../../hooks/useTipValues";
import {
  decimalValidation,
  integerValidation,
} from "../../utils/formValidations";
import useInputData from "../../hooks/useInputData";

const TipCalculator = () => {
  const { setBill, setPeople } = useTipValues();
  const { inputData, setInputData } = useInputData();

  return (
    <AppWrapperStyled>
      <InputsWrapper>
        <LabeledInput
          id="price"
          label="Bill"
          iconSrc={dollarIcon}
          setValue={setBill}
          inputValue={inputData.bill}
          setInputValue={value => setInputData({ ...inputData, bill: value })}
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
          validations={integerValidation}
        />
      </InputsWrapper>
      <ResultPanel />
    </AppWrapperStyled>
  );
};

export default TipCalculator;
