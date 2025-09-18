import useInputData from "../../hooks/useInputData";
import useTipValues from "../../hooks/useTipValues";
import { ResetButtonStyled } from "./styles";

const ResetButton = () => {
  const { setBill, setTip, setPeople } = useTipValues();
  const { resetInputData } = useInputData();

  const handleClick = () => {
    setBill(0);
    setTip(0);
    setPeople(0);
    resetInputData();
  };

  return <ResetButtonStyled onClick={handleClick}>Reset</ResetButtonStyled>;
};

export default ResetButton;
