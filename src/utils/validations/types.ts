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
