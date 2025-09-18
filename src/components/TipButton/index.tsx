import useTipValues from "../../hooks/useTipValues";
import { TipButtonStyled } from "./styles";
import type { TipButtonProps } from "./types";

const TipButton = ({ label, tipPercent }: TipButtonProps) => {
  const { tip, setTip } = useTipValues();
  const tipDecimal = tipPercent * 0.01;

  const handleClick = () => {
    setTip(tipDecimal);
  };

  return (
    <TipButtonStyled $pressed={tipDecimal === tip} onClick={handleClick}>
      {label}
    </TipButtonStyled>
  );
};

export default TipButton;
