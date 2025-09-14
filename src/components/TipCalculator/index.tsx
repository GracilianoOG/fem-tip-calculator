import LabeledInput from "../LabeledInput";
import ResultPanel from "../ResultPanel";
import TipMenu from "../TipMenu";
import dollarIcon from "../../assets/images/icon-dollar.svg";
import personIcon from "../../assets/images/icon-person.svg";
import { AppWrapperStyled, InputsWrapper } from "./styles";
import useTipValues from "../../hooks/useTipValues";

const TipCalculator = () => {
  const { setBill, setPeople } = useTipValues();

  return (
    <AppWrapperStyled>
      <InputsWrapper>
        <div>
          <LabeledInput
            id="price"
            label="Bill"
            placeholder="0"
            iconSrc={dollarIcon}
            setValue={setBill}
          />
        </div>
        <div>
          <TipMenu label="Select Tip %" />
        </div>
        <div>
          <LabeledInput
            id="people"
            label="Number of People"
            placeholder="0"
            iconSrc={personIcon}
            setValue={setPeople}
          />
        </div>
      </InputsWrapper>
      <ResultPanel />
    </AppWrapperStyled>
  );
};

export default TipCalculator;
