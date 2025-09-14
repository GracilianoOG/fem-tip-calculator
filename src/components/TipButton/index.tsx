import useTipValues from "../../hooks/useTipValues";
import { TipButtonStyled } from "../../styles/Button.styled";
import type { TipButtonProps } from "./types";

const TipButton = ({ label, value }: TipButtonProps) => {
  const { tip, setTip } = useTipValues();

  const handleClick = () => {
    setTip(value);
  };

  return (
    <TipButtonStyled $pressed={value === tip} onClick={handleClick}>
      {label}
    </TipButtonStyled>
  );
};

export default TipButton;
