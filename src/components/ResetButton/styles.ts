import styled, { css } from "styled-components";
import { ButtonStyled } from "../../styles/Button.styled";

export const ResetButtonStyled = styled(ButtonStyled)<{ $disabled: boolean }>`
  background-color: var(--color-green-400);
  color: var(--color-green-900);
  font-size: 1.25rem;
  padding: 0.5rem;
  text-transform: uppercase;
  width: 100%;

  ${({ $disabled }) =>
    $disabled &&
    css`
      background-color: var(--color-grey-500);
      opacity: 0.3;
    `}
`;
