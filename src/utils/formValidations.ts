type ValidationErrorType =
  | "empty"
  | "equalsZero"
  | "notNumber"
  | "notInteger"
  | "notPositive";

export interface ValidationType {
  type: ValidationErrorType;
  message: string;
}

export const validateInputElement = (
  validation: ValidationType,
  element: HTMLInputElement
) => {
  let isInvalid: boolean = false;

  const type: string = validation.type;
  const trimmedValue: string = element.value.trim();
  const numValue: number = Number(trimmedValue);

  switch (type) {
    case "empty":
      isInvalid = element.value.trim().length === 0;
      break;
    case "notInteger":
      isInvalid = !Number.isInteger(numValue);
      break;
    case "equalsZero":
      isInvalid = numValue === 0;
      break;
    case "notNumber":
      isInvalid = !(
        typeof numValue === "number" &&
        !Number.isNaN(numValue) &&
        Number.isFinite(numValue)
      );
      break;
    case "notPositive":
      isInvalid = numValue < 0;
      break;
  }

  const errorMessage: string = isInvalid ? validation.message : "";

  return [isInvalid, errorMessage];
};
