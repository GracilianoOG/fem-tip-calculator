import { ResetButtonStyled } from "../../styles/Button.styled";
import ResultBox from "../ResultBox";
import { ResultsWrapperStyled } from "./styles";

const ResultPanel = () => {
  return (
    <ResultsWrapperStyled>
      <ResultBox label="Tip Amount" total={4.27} />
      <ResultBox label="Total" total={32.79} />
      <ResetButtonStyled>Reset</ResetButtonStyled>
    </ResultsWrapperStyled>
  );
};

export default ResultPanel;
