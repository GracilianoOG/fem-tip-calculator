import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styled";
import TipCalculator from "./components/TipCalculator";
import { mediaQueries } from "./utils/mediaQueries";
import TipProvider from "./providers/TipProvider";

const MainTitleStyled = styled.h1`
  --spacing: 10px;
  color: var(--color-green-900);
  font-size: 25px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 40px;
  letter-spacing: var(--spacing);
  padding-left: var(--spacing);

  ${mediaQueries.laptop} {
    margin-bottom: 78px;
    margin-top: 152px;
  }
`;

const App = () => {
  return (
    <>
      <TipProvider>
        <GlobalStyles />
        <MainTitleStyled>
          Spli
          <br />
          tter
        </MainTitleStyled>
        <TipCalculator />
      </TipProvider>
    </>
  );
};

export default App;
