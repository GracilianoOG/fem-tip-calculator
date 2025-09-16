import useTipValues from "../../hooks/useTipValues";
import { ResetButtonStyled } from "../../styles/Button.styled";
import ResultBox from "../ResultBox";
import { ResultsWrapperStyled } from "./styles";

const ResultPanel = () => {
  const { bill, tip, people } = useTipValues();

  const billPerPerson = bill / people;

  const calcTipAmount = () => {
    if (!bill || !people || !tip) {
      return 0;
    }
    const tipAmount = billPerPerson * tip;
    return tipAmount;
  };

  const calcTotalPerPerson = () => {
    if (!bill || !people || !tip) {
      return 0;
    }
    const totalPerPerson = billPerPerson + calcTipAmount();
    return totalPerPerson;
  };

  return (
    <ResultsWrapperStyled>
      <ResultBox label="Tip Amount" total={calcTipAmount().toFixed(2)} />
      <ResultBox label="Total" total={calcTotalPerPerson().toFixed(2)} />
      <ResetButtonStyled>Reset</ResetButtonStyled>
    </ResultsWrapperStyled>
  );
};

export default ResultPanel;
