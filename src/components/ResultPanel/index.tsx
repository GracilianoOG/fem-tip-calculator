import useTipValues from "../../hooks/useTipValues";
import { ResetButtonStyled } from "../../styles/Button.styled";
import ResultBox from "../ResultBox";
import { ResultsWrapperStyled } from "./styles";

const ResultPanel = () => {
  const { bill, tip, people } = useTipValues();

  const billPerPerson = bill / people;
  const tipAmount = billPerPerson * tip;
  const totalPerPerson = billPerPerson + tipAmount;

  return (
    <ResultsWrapperStyled>
      <ResultBox label="Tip Amount" total={tipAmount.toFixed(2)} />
      <ResultBox label="Total" total={totalPerPerson.toFixed(2)} />
      <ResetButtonStyled>Reset</ResetButtonStyled>
    </ResultsWrapperStyled>
  );
};

export default ResultPanel;
