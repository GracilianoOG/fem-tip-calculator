import styled from "styled-components";

export const TipButtonStyled = styled.button`
  background-color: var(--color-green-900);
  border: 2px solid transparent;
  border-radius: 0.3125rem;
  color: var(--color-white);
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.3125rem 0;
  transition: color 0.2s, background-color 0.2s;
  text-align: center;

  &:focus-visible,
  &:hover {
    background-color: var(--color-green-300);
    color: var(--color-green-900);
  }
`;

export const ResetButtonStyled = styled(TipButtonStyled)`
  background-color: var(--color-green-400);
  color: var(--color-green-900);
  font-size: 1.25rem;
  padding: 0.5rem;
  text-transform: uppercase;
  width: 100%;
`;
