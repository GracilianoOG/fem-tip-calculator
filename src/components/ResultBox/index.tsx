import {
  ResultBoxStyled,
  ResultPerPersonStyled,
  ResultPriceStyled,
  ResultTitleStyled,
} from "./styles";
import type { ResultBoxProps } from "./types";

const ResultBox = ({ label, total }: ResultBoxProps) => {
  const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    currencyDisplay: "symbol",
  });

  return (
    <ResultBoxStyled>
      <ResultTitleStyled>
        {label} <ResultPerPersonStyled>/ person</ResultPerPersonStyled>
      </ResultTitleStyled>
      <ResultPriceStyled>{formatter.format(total)}</ResultPriceStyled>
    </ResultBoxStyled>
  );
};

export default ResultBox;
