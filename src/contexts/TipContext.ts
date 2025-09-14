import { createContext } from "react";

interface TipContextType {
  bill: number;
  tip: number;
  people: number;
  setBill: React.Dispatch<React.SetStateAction<number>>;
  setTip: React.Dispatch<React.SetStateAction<number>>;
  setPeople: React.Dispatch<React.SetStateAction<number>>;
}

export const TipContext = createContext<TipContextType | undefined>(undefined);
