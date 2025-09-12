import { TipButtonStyled } from "../../styles/Button.styled";
import { TipLabelStyled } from "../../styles/Label.styled";
import { TipOptionsStyled } from "./styles";

const TipMenu = ({ label }: { label: string }) => {
  return (
    <>
      <TipLabelStyled htmlFor="custom-tip">{label}</TipLabelStyled>
      <TipOptionsStyled>
        <TipButtonStyled>5%</TipButtonStyled>
        <TipButtonStyled>10%</TipButtonStyled>
        <TipButtonStyled>15%</TipButtonStyled>
        <TipButtonStyled>25%</TipButtonStyled>
        <TipButtonStyled>50%</TipButtonStyled>
        <TipButtonStyled>99%</TipButtonStyled>
      </TipOptionsStyled>
    </>
  );
};

export default TipMenu;
