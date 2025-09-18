import useInputData from "../../hooks/useInputData";
import useTipValues from "../../hooks/useTipValues";
import { InputStyled } from "../../styles/Input.styled";
import type { TipInputProps } from "./types";

const TipInput = ({ id, placeholder }: TipInputProps) => {
  const { setTip } = useTipValues();
  const { inputData, setInputData } = useInputData();

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTip(parseFloat(e.target.value) * 0.01);
    setInputData({ ...inputData, tip: e.target.value });
  };

  return (
    <InputStyled
      id={id}
      placeholder={placeholder}
      onChange={handleClick}
      value={inputData.tip}
    />
  );
};

export default TipInput;
