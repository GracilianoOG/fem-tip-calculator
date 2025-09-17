import type { ValidationType } from "../../utils/formValidations";

export interface LabeledInputProps {
  id: string;
  label: string;
  placeholder?: string;
  iconSrc: string;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  validations: ValidationType[];
}
