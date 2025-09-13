import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const TipOptionsStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 16px;

  ${mediaQueries.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
