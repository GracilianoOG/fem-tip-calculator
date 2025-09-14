import { useContext } from "react";
import { TipContext } from "../contexts/TipContext";

const useTipValues = () => {
  const context = useContext(TipContext);

  if (!context) {
    throw new Error("TipContext must be within a TipProvider!");
  }

  return context;
};

export default useTipValues;
