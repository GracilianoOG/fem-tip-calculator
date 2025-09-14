import useTipValues from "../../hooks/useTipValues";
import { TipButtonStyled } from "../../styles/Button.styled";
import { InputStyled } from "../../styles/Input.styled";
import { TipLabelStyled } from "../../styles/Label.styled";
import { TipOptionsStyled } from "./styles";

const TipMenu = ({ label }: { label: string }) => {
  const { setTip } = useTipValues();

  return (
    <>
      <TipLabelStyled htmlFor="custom-tip">{label}</TipLabelStyled>
      <TipOptionsStyled>
        <TipButtonStyled onClick={() => setTip(0.05)}>5%</TipButtonStyled>
        <TipButtonStyled onClick={() => setTip(0.1)}>10%</TipButtonStyled>
        <TipButtonStyled onClick={() => setTip(0.15)}>15%</TipButtonStyled>
        <TipButtonStyled onClick={() => setTip(0.25)}>25%</TipButtonStyled>
        <TipButtonStyled onClick={() => setTip(0.5)}>50%</TipButtonStyled>
        <InputStyled id="custom-tip" placeholder="Custom" />
      </TipOptionsStyled>
    </>
  );
};

export default TipMenu;
