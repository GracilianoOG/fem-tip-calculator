import { TipLabelStyled } from "../../styles/Label.styled";
import TipButton from "../TipButton";
import TipInput from "../TipInput";
import { TipOptionsStyled } from "./styles";

const TipMenu = ({ label }: { label: string }) => {
  return (
    <div>
      <TipLabelStyled htmlFor="custom-tip">{label}</TipLabelStyled>
      <TipOptionsStyled>
        <TipButton label="5%" value={0.05} />
        <TipButton label="10%" value={0.1} />
        <TipButton label="15%" value={0.15} />
        <TipButton label="25%" value={0.25} />
        <TipButton label="50%" value={0.5} />
        <TipInput id="custom-tip" placeholder="Custom" />
      </TipOptionsStyled>
    </div>
  );
};

export default TipMenu;
