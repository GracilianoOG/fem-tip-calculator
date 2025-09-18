import { useContext } from "react";
import { InputDataContext } from "../contexts/InputDataContext";

const useInputData = () => {
  const context = useContext(InputDataContext);

  if (!context) {
    throw new Error("InputDataContext must be within a InputDataProvider!");
  }

  return context;
};

export default useInputData;
