import GlobalStyles from "./styles/GlobalStyles.styled";
import TipCalculator from "./components/TipCalculator";
import TipProvider from "./providers/TipProvider";
import InputDataProvider from "./providers/InputDataProvider";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <TipProvider>
        <InputDataProvider>
          <GlobalStyles />
          <Header />
          <TipCalculator />
        </InputDataProvider>
      </TipProvider>
    </>
  );
};

export default App;
