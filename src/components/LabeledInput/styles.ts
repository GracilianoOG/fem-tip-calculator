import styled from "styled-components";
import { InputStyled } from "../../styles/Input.styled";

export const LabeledInputStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const InputWithIconStyled = styled(InputStyled)<{ $icon: string }>`
  background-image: url("${({ $icon }) => $icon}");
  background-repeat: no-repeat;
  background-position: center left 1.125rem;
  padding-left: 3rem;
`;
