import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styled";
import DollarIcon from "./assets/images/icon-dollar.svg";

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
  color: var(--color-grey-500);
  display: block;
`;

const InputStyled = styled.input`
  border: none;
  border-radius: 5px;
  background-color: var(--color-grey-50);
  background-image: url("${DollarIcon}");
  background-repeat: no-repeat;
  background-position: center left 1.125rem;
  color: var(--color-green-900);
  display: block;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  min-height: 2.9375rem;
  padding: 0 1rem 0 2.8125rem;
  text-align: right;
  width: 100%;
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
          <InputStyled type="text" placeholder="0" />
        </div>
        <div></div>
      </AppWrapperStyled>
    </>
  );
};

export default App;
