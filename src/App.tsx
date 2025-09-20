import GlobalStyles from "./styles/GlobalStyles.styled";
import TipProvider from "./providers/TipProvider";
import InputDataProvider from "./providers/InputDataProvider";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <TipProvider>
        <InputDataProvider>
          <GlobalStyles />
          <Header />
          <Main />
        </InputDataProvider>
      </TipProvider>
    </>
  );
};

export default App;
