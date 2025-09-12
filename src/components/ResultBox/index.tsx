import {
  ResultBoxStyled,
  ResultPerPersonStyled,
  ResultPriceStyled,
  ResultTitleStyled,
} from "./styles";
import type { ResultBoxProps } from "./types";

const ResultBox = ({ label, total }: ResultBoxProps) => {
  return (
    <ResultBoxStyled>
      <ResultTitleStyled>
        {label} <ResultPerPersonStyled>/ person</ResultPerPersonStyled>
      </ResultTitleStyled>
      <ResultPriceStyled>${total}</ResultPriceStyled>
    </ResultBoxStyled>
  );
};

export default ResultBox;
