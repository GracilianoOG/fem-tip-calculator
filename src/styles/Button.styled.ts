import styled from "styled-components";

export const TipButtonStyled = styled.button`
  background-color: var(--color-green-900);
  border: 2px solid transparent;
  border-radius: 0.3125rem;
  color: var(--color-white);
  font-size: 1.5rem;
  padding: 0.3125rem 0;
  text-align: center;
`;

export const ResetButtonStyled = styled(TipButtonStyled)`
  background-color: var(--color-green-400);
  color: var(--color-green-900);
  font-size: 1.25rem;
  text-transform: uppercase;
  width: 100%;
`;
