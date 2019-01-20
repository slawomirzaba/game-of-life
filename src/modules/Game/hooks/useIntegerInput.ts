import { useState, SetStateAction, Dispatch } from "react";

export const useIntegerInput = (
  initialInputValue: number
): [number, (value: string) => void] => {
  const [state, setState] = useState(initialInputValue);

  const setIntegerValue = (value: string) => {
    const newValue = parseInt(value, 10) || 0;

    setState(newValue);
  };

  return [state, setIntegerValue];
};
