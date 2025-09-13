import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const AppWrapperStyled = styled.div`
  --max-width: 37.5rem;
  background-color: var(--color-white);
  border-radius: 1.5625rem;
  display: grid;
  gap: 2.5rem;
  margin: 0 auto;
  padding: 2rem;
  width: min(100%, var(--max-width));

  ${mediaQueries.laptop} {
    --max-width: 57.5rem;
    grid-template-columns: 1fr 1fr;
    gap: 1.875rem;
    height: 30rem;
    padding: 2rem;
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
