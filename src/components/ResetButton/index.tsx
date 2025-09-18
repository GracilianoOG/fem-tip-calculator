import useInputData from "../../hooks/useInputData";
import useTipValues from "../../hooks/useTipValues";
import { ResetButtonStyled } from "./styles";

const ResetButton = () => {
  const { resetTipValues } = useTipValues();
  const { resetInputData } = useInputData();

  const handleClick = () => {
    resetTipValues();
    resetInputData();
  };

  return <ResetButtonStyled onClick={handleClick}>Reset</ResetButtonStyled>;
};

export default ResetButton;
