import useInputData from "../../hooks/useInputData";
import LabelWithMessage from "../LabelWithMessage";
import TipButton from "../TipButton";
import TipInput from "../TipInput";
import { TipMenuStyled, TipOptionsStyled } from "./styles";
import type { TipMenuProps } from "./types";

const TipMenu = ({ label }: TipMenuProps) => {
  const { inputErrors } = useInputData();

  return (
    <TipMenuStyled>
      <LabelWithMessage
        id="custom-tip"
        label={label}
        message={inputErrors.tip}
      />
      <TipOptionsStyled>
        <TipButton label="5%" tipPercent={5} />
        <TipButton label="10%" tipPercent={10} />
        <TipButton label="15%" tipPercent={15} />
        <TipButton label="25%" tipPercent={25} />
        <TipButton label="50%" tipPercent={50} />
        <TipInput id="custom-tip" placeholder="Custom" />
      </TipOptionsStyled>
    </TipMenuStyled>
  );
};

export default TipMenu;
