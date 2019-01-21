import { useState } from "react";

type usePositiveIntegerInputT = [number, (value: string | number) => void];

export const usePositiveInteger = (
  initialInputValue: number
): usePositiveIntegerInputT => {
  const [value, setValue] = useState(initialInputValue);

  const setIntegerValue = (passedValue: string | number) => {
    const newValue =
      typeof passedValue === "string"
        ? parseInt(passedValue, 10) || 0
        : passedValue;

    setValue(newValue);
  };

  return [value, setIntegerValue];
};
