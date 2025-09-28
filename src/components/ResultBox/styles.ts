import styled from "styled-components";
import { mediaQueries } from "../../utils/responsive/mediaQueries";

export const ResultBoxStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  &:first-of-type {
    margin-bottom: 1.5rem;
  }

  &:nth-of-type(2n) {
    margin-bottom: 2rem;
  }

  ${mediaQueries.laptop} {
    &:first-of-type {
      margin-bottom: 1.75rem;
    }

    &:nth-of-type(2n) {
      margin-bottom: 7.5rem;
    }
  }
`;

export const ResultTitleStyled = styled.h2`
  font-size: 1rem;
`;

export const ResultPerPersonStyled = styled.span`
  color: var(--color-grey-400);
  display: block;
  font-size: 0.8125rem;
`;

export const ResultPriceStyled = styled.p`
  color: var(--color-green-400);
  font-size: 1.875rem;

  ${mediaQueries.laptop} {
    font-size: 2.875rem;
  }
`;
