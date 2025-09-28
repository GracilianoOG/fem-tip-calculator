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

const isEmpty = (value: string) => value.trim().length === 0;

const isZero = (number: number) => number === 0;

const isPositive = (number: number) => number > 0;

export const validateInputElement = (
  validation: ValidationType,
  element: HTMLInputElement
): [boolean, string] => {
  let isInvalid: boolean = false;

  const type: string = validation.type;
  const trimmedValue: string = element.value.trim();
  const numValue: number = Number(trimmedValue);

  switch (type) {
    case "empty":
      isInvalid = isEmpty(element.value);
      break;
    case "notInteger":
      isInvalid = isNumber(numValue) && !Number.isInteger(numValue);
      break;
    case "equalsZero":
      isInvalid = isZero(numValue);
      break;
    case "notNumber":
      isInvalid = !isNumber(numValue);
      break;
    case "notPositive":
      isInvalid = !isPositive(numValue);
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
