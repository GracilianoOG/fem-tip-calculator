import ResultPanel from "../ResultPanel";
import { AppWrapperStyled } from "./styles";
import InputsPanel from "../InputsPanel";

const TipCalculator = () => {
  return (
    <AppWrapperStyled>
      <InputsPanel />
      <ResultPanel />
    </AppWrapperStyled>
  );
};

export default TipCalculator;
