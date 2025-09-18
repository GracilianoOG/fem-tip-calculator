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

  return (
    <InputDataContext
      value={{
        inputData,
        setInputData,
        resetInputData,
        inputErrors,
        setInputErrors,
      }}
    >
      {children}
    </InputDataContext>
  );
};

export default InputDataProvider;
