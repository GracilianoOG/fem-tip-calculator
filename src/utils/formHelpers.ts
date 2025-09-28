export const isNumber = (number: number): boolean => {
  return (
    typeof number === "number" &&
    !Number.isNaN(number) &&
    Number.isFinite(number)
  );
};

export const isEmpty = (value: string) => value.trim().length === 0;

export const isZero = (number: number) => number === 0;

export const isPositive = (number: number) => number > 0;

export const isValidInteger = (number: number) =>
  isNumber(number) && Number.isInteger(number);
