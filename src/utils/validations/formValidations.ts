import * as Helpers from "./formHelpers";
import type { ValidationType } from "./types";

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
      isInvalid = Helpers.isEmpty(element.value);
      break;
    case "notInteger":
      isInvalid = !Helpers.isValidInteger(numValue);
      break;
    case "equalsZero":
      isInvalid = Helpers.isZero(numValue);
      break;
    case "notNumber":
      isInvalid = !Helpers.isNumber(numValue);
      break;
    case "notPositive":
      isInvalid = !Helpers.isPositive(numValue);
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
