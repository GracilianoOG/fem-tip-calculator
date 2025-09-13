import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const TipOptionsStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.875rem 1rem;

  ${mediaQueries.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
