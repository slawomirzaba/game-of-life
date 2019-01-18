import React, { useState } from "react";
import "./element.css";

interface PropsI {
  elementKey: string;
  isActive: boolean;
  toggleActiveElementKey: (key: string) => void;
}

export const Element = ({
  elementKey,
  isActive,
  toggleActiveElementKey,
}: PropsI) => {
  const getClassName = (): string => {
    let className = "element";
    if (isActive) className += " element--active";

    return className;
  };

  return (
    <td
      className={getClassName()}
      onClick={() => toggleActiveElementKey(elementKey)}
    />
  );
};
