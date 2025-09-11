import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styled";

const MainTitleStyled = styled.h1`
  --spacing: 10px;
  color: var(--color-green-900);
  font-size: 25px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 40px;
  letter-spacing: var(--spacing);
  padding-left: var(--spacing);
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <MainTitleStyled>
        Spli
        <br />
        tter
      </MainTitleStyled>
    </>
  );
};

export default App;
