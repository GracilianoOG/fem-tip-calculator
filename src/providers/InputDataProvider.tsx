import { useState } from "react";
import { InputDataContext } from "../contexts/InputDataContext";

interface InputDataProviderProps {
  children: React.ReactNode;
}

const defaultState = { bill: "", tip: "", people: "" };

const InputDataProvider = ({ children }: InputDataProviderProps) => {
  const [inputData, setInputData] = useState(defaultState);
  const [inputErrors, setInputErrors] = useState(defaultState);

  const resetInputData = () => {
    setInputData(defaultState);
    setInputErrors(defaultState);
  };

  const areInputsEmpty = () => {
    const { bill: iBill, tip: iTip, people: iPeople } = inputData;
    const { bill: errBill, tip: errTip, people: errPeople } = inputErrors;
    return !iBill && !iTip && !iPeople && !errBill && !errTip && !errPeople;
  };

  return (
    <InputDataContext
      value={{
        inputData,
        setInputData,
        resetInputData,
        inputErrors,
        setInputErrors,
        areInputsEmpty,
      }}
    >
      {children}
    </InputDataContext>
  );
};

export default InputDataProvider;
