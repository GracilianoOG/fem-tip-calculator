import useTipValues from "../../hooks/useTipValues";
import { InputStyled } from "../../styles/Input.styled";
import type { TipInputProps } from "./types";

const TipInput = ({ id, placeholder }: TipInputProps) => {
  const { setTip } = useTipValues();

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTip(parseFloat(e.target.value) * 0.01);
  };

  return (
    <InputStyled id={id} placeholder={placeholder} onChange={handleClick} />
  );
};

export default TipInput;
