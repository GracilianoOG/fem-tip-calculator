import styled from "styled-components";
import DollarIcon from "../../assets/images/icon-dollar.svg";

export const LabelStyled = styled.label`
  color: var(--color-grey-500);
  display: block;
`;

export const InputStyled = styled.input`
  border: none;
  border-radius: 5px;
  background-color: var(--color-grey-50);
  background-image: url("${DollarIcon}");
  background-repeat: no-repeat;
  background-position: center left 1.125rem;
  color: var(--color-green-900);
  display: block;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  min-height: 2.9375rem;
  padding: 0 1rem 0 2.8125rem;
  text-align: right;
  width: 100%;
`;
