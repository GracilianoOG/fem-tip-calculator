import { useState } from "react";
import { InputDataContext } from "../contexts/InputDataContext";

interface InputDataProviderProps {
  children: React.ReactNode;
}

const defaultState = { bill: "", tip: "", people: "" };

const InputDataProvider = ({ children }: InputDataProviderProps) => {
  const [inputData, setInputData] = useState(defaultState);

  return (
    <InputDataContext
      value={{
        inputData,
        setInputData,
      }}
    >
      {children}
    </InputDataContext>
  );
};

export default InputDataProvider;
