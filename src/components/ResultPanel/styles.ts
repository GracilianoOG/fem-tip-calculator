import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const ResultsWrapperStyled = styled.div`
  background-color: var(--color-green-900);
  color: var(--color-white);
  padding: 1rem;
  padding-top: 1.875rem;
  position: relative;
  z-index: 1;

  &::before {
    border-radius: 1rem;
    background-color: var(--color-green-900);
    content: "";
    position: absolute;
    width: calc(100% + 1rem);
    height: calc(100% + 1rem);
    inset: -0.5rem;
    z-index: -1;
  }

  ${mediaQueries.laptop} {
    border-radius: 1rem;
    padding: 2.5rem;
    padding-top: 2.625rem;

    &::before {
      display: none;
    }
  }
`;
