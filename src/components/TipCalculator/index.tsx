import ResultPanel from "../ResultPanel";
import { TipCalculatorStyled } from "./styles";
import InputsPanel from "../InputsPanel";

const TipCalculator = () => {
  return (
    <TipCalculatorStyled>
      <InputsPanel />
      <ResultPanel />
    </TipCalculatorStyled>
  );
};

export default TipCalculator;
