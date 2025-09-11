import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styled";

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
`;

const AppWrapperStyled = styled.div`
  background-color: var(--color-white);
  border-radius: 25px;
  padding: 32px;
`;

const LabelStyled = styled.label`
  display: block;
`;

const InputStyled = styled.div`
  background-color: var(--color-grey-50);
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
      <AppWrapperStyled>
        <div>
          <LabelStyled htmlFor="">Bill</LabelStyled>
          <InputStyled>
            <input type="text" />
          </InputStyled>
        </div>
        <div></div>
      </AppWrapperStyled>
    </>
  );
};

export default App;
