import type { ValidationType } from "../../utils/formValidations";

export interface LabeledInputProps {
  id: string;
  label: string;
  placeholder?: string;
  iconSrc: string;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  inputValue: string;
  setInputValue: (value: string) => void;
  error: string;
  setError: (value: string) => void;
  validations: ValidationType[];
}
