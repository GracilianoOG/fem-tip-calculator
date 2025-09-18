import styled, { css } from "styled-components";
import { ButtonStyled } from "../../styles/Button.styled";

export const TipButtonStyled = styled(ButtonStyled)<{ $pressed?: boolean }>`
  ${({ $pressed }) =>
    $pressed &&
    css`
      background-color: var(--color-green-400);
      color: var(--color-green-900);
    `}
`;
