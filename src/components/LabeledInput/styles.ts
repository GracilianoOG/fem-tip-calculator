import styled from "styled-components";

export const LabelStyled = styled.label`
  color: var(--color-grey-500);
  display: block;
  margin-bottom: 0.375rem;
`;

export const InputStyled = styled.input<{ $icon: string }>`
  border: none;
  border-radius: 5px;
  background-color: var(--color-grey-50);
  background-image: url("${({ $icon }) => $icon}");
  background-repeat: no-repeat;
  background-position: center left 1.125rem;
  color: var(--color-green-900);
  display: block;
  font-size: 1.5rem;
  min-height: 2.9375rem;
  padding: 0 1rem 0 2.8125rem;
  text-align: right;
  width: 100%;
`;
