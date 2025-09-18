import useTipValues from "../../hooks/useTipValues";
import ResetButton from "../ResetButton";
import ResultBox from "../ResultBox";
import { ResultsWrapperStyled } from "./styles";

const ResultPanel = () => {
  const { bill, tip, people } = useTipValues();

  const billPerPerson = bill / people;

  const validateValues = () => {
    return !(!bill || !people || !tip);
  };

  const calcTipAmount = () => {
    if (validateValues()) {
      const tipAmount = billPerPerson * tip;
      return tipAmount;
    }
    return 0;
  };

  const calcTotalPerPerson = () => {
    if (validateValues()) {
      const totalPerPerson = billPerPerson + calcTipAmount();
      return totalPerPerson;
    }
    return 0;
  };

  return (
    <ResultsWrapperStyled>
      <ResultBox label="Tip Amount" total={calcTipAmount()} />
      <ResultBox label="Total" total={calcTotalPerPerson()} />
      <ResetButton />
    </ResultsWrapperStyled>
  );
};

export default ResultPanel;
