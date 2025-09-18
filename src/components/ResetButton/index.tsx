import useInputData from "../../hooks/useInputData";
import useTipValues from "../../hooks/useTipValues";
import { ResetButtonStyled } from "./styles";

const ResetButton = () => {
  const { resetTipValues } = useTipValues();
  const { resetInputData, areInputsEmpty } = useInputData();

  const handleClick = () => {
    resetTipValues();
    resetInputData();
  };

  return (
    <ResetButtonStyled $disabled={areInputsEmpty()} onClick={handleClick}>
      Reset
    </ResetButtonStyled>
  );
};

export default ResetButton;
