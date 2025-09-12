import styled from "styled-components";

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
`;
