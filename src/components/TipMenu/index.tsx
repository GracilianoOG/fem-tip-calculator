import TipButton from "../TipButton";
import TipInput from "../TipInput";
import { TipLabelStyled, TipMenuStyled, TipOptionsStyled } from "./styles";
import type { TipMenuProps } from "./types";

const TipMenu = ({ label }: TipMenuProps) => {
  return (
    <TipMenuStyled>
      <TipLabelStyled htmlFor="custom-tip">{label}</TipLabelStyled>
      <TipOptionsStyled>
        <TipButton label="5%" value={0.05} />
        <TipButton label="10%" value={0.1} />
        <TipButton label="15%" value={0.15} />
        <TipButton label="25%" value={0.25} />
        <TipButton label="50%" value={0.5} />
        <TipInput id="custom-tip" placeholder="Custom" />
      </TipOptionsStyled>
    </TipMenuStyled>
  );
};

export default TipMenu;
