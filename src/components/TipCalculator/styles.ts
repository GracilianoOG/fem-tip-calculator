import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const AppWrapperStyled = styled.div`
  background-color: var(--color-white);
  border-radius: 1.5625rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2rem;

  ${mediaQueries.laptop} {
    flex-direction: row;
    height: 30rem;
    justify-content: space-between;
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
    flex: 1;
    justify-content: space-between;
    padding: 1rem;
  }
`;
