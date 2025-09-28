import styled from "styled-components";
import { mediaQueries } from "../../utils/responsive/mediaQueries";

export const InputsWrapperStyled = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;

  ${mediaQueries.laptop} {
    justify-content: space-between;
    padding: 1rem;
  }
`;
