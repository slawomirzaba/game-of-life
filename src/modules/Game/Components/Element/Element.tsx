import React, { useState } from "react";
import "./element.css";

interface PropsI {
  elementKey: string;
  isActive: boolean;
  onMouseEnter: (elementKey: string) => void;
  onMouseDown: (elementKey: string) => void;
}

export const Element = ({
  elementKey,
  isActive,
  onMouseEnter,
  onMouseDown
}: PropsI) => {
  const getClassName = (): string => {
    let className = "element";
    if (isActive) className += " element--active";

    return className;
  };

  return (
    <td
      onMouseEnter={() => onMouseEnter(elementKey)}
      onMouseDown={() => onMouseDown(elementKey)}
      className={getClassName()}
    />
  );
};
