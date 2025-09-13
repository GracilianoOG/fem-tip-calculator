import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const AppWrapperStyled = styled.div`
  background-color: var(--color-white);
  border-radius: 1.5625rem;
  display: grid;
  gap: 2.5rem;
  padding: 2rem;

  ${mediaQueries.laptop} {
    grid-template-columns: 1fr 1fr;
    gap: 1.875rem;
    height: 30rem;
    margin: auto;
    padding: 2rem;
    width: 57.5rem;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;

  ${mediaQueries.laptop} {
    justify-content: space-between;
    padding: 1rem;
  }
`;
