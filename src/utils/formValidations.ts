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

const isNumber = (number: number): boolean => {
  return (
    typeof number === "number" &&
    !Number.isNaN(number) &&
    Number.isFinite(number)
  );
};

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
      isInvalid = isNumber(numValue) && !Number.isInteger(numValue);
      break;
    case "equalsZero":
      isInvalid = numValue === 0;
      break;
    case "notNumber":
      isInvalid = !isNumber(numValue);
      break;
    case "notPositive":
      isInvalid = numValue < 0;
      break;
  }

  const errorMessage: string = isInvalid ? validation.message : "";

  return [isInvalid, errorMessage];
};

export const decimalValidation: ValidationType[] = [
  {
    type: "empty",
    message: "Can't be empty!",
  },
  {
    type: "notNumber",
    message: "Type a number!",
  },
  {
    type: "equalsZero",
    message: "Can't be zero!",
  },
  {
    type: "notPositive",
    message: "Can't be negative!",
  },
];

export const integerValidation: ValidationType[] = [
  ...decimalValidation,
  {
    type: "notInteger",
    message: "Only whole numbers!",
  },
];
