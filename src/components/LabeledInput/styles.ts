import styled from "styled-components";
import { InputStyled } from "../../styles/Input.styled";

export const LabelStyled = styled.label`
  color: var(--color-grey-500);
  display: block;
  margin-bottom: 0.375rem;
`;

export const InputWithIconStyled = styled(InputStyled)<{ $icon: string }>`
  background-image: url("${({ $icon }) => $icon}");
  background-repeat: no-repeat;
  background-position: center left 1.125rem;
  padding: 0 1rem 0 2.8125rem;
`;
