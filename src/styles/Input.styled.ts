import styled, { css } from "styled-components";

export const InputStyled = styled.input<{ $hasError: boolean }>`
  border: 0.125rem solid transparent;
  border-radius: 0.3125rem;
  background-color: var(--color-grey-50);
  color: var(--color-green-900);
  caret-color: var(--color-green-400);
  display: block;
  font-size: 1.5rem;
  min-height: 2.9375rem;
  padding-right: 1rem;
  text-align: right;
  width: 100%;

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: var(--error-color);
    `}
`;
