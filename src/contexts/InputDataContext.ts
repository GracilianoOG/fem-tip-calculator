import { createContext } from "react";

interface InputDataType {
  bill: string;
  tip: string;
  people: string;
}

interface InputContextType {
  inputData: InputDataType;
  setInputData: React.Dispatch<React.SetStateAction<InputDataType>>;
}

export const InputDataContext = createContext<InputContextType | undefined>(
  undefined
);
