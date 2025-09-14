import LabeledInput from "../LabeledInput";
import ResultPanel from "../ResultPanel";
import TipMenu from "../TipMenu";
import dollarIcon from "../../assets/images/icon-dollar.svg";
import personIcon from "../../assets/images/icon-person.svg";
import { AppWrapperStyled, InputsWrapper } from "./styles";
import TipProvider from "../../providers/TipProvider";

const TipCalculator = () => {
  return (
    <TipProvider>
      <AppWrapperStyled>
        <InputsWrapper>
          <div>
            <LabeledInput
              id="price"
              label="Bill"
              placeholder="0"
              iconSrc={dollarIcon}
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
            />
          </div>
        </InputsWrapper>
        <ResultPanel />
      </AppWrapperStyled>
    </TipProvider>
  );
};

export default TipCalculator;
