import { useRef } from "react";
import {
  ResultBoxStyled,
  ResultPerPersonStyled,
  ResultPriceStyled,
  ResultTitleStyled,
} from "./styles";
import type { ResultBoxProps } from "./types";

const ResultBox = ({ label, total }: ResultBoxProps) => {
  const formatterRef = useRef<Intl.NumberFormat | null>(null);

  if (!formatterRef.current) {
    formatterRef.current = new Intl.NumberFormat("en-US", {
      currency: "USD",
      style: "currency",
      currencyDisplay: "symbol",
    });
  }

  return (
    <ResultBoxStyled>
      <ResultTitleStyled>
        {label} <ResultPerPersonStyled>/ person</ResultPerPersonStyled>
      </ResultTitleStyled>
      <ResultPriceStyled>
        {formatterRef.current.format(total)}
      </ResultPriceStyled>
    </ResultBoxStyled>
  );
};

export default ResultBox;
