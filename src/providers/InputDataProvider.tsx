import { useState } from "react";
import { InputDataContext } from "../contexts/InputDataContext";

interface InputDataProviderProps {
  children: React.ReactNode;
}

const InputDataProvider = ({ children }: InputDataProviderProps) => {
  const [inputData, setInputData] = useState({ bill: "", tip: "", people: "" });

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
