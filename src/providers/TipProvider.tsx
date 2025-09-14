import { useState } from "react";
import { TipContext } from "../contexts/TipContext";

interface TipProviderProps {
  children: React.ReactNode;
}

const TipProvider = ({ children }: TipProviderProps) => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  return (
    <TipContext value={{ bill, setBill, tip, setTip, people, setPeople }}>
      {children}
    </TipContext>
  );
};

export default TipProvider;
