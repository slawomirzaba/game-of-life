import React from "react";
import * as patterns from "../../consts/patterns";
import { PatternI } from "../../interfaces";
import "./patterns.css";

interface PropsI {
  isPlay: boolean;
  selectPattern: (pattern: PatternI) => void;
}

export const Patterns = ({ isPlay, selectPattern }: PropsI) => {
  return (
    <div className={`patterns ${isPlay ? "patterns--disabled" : ""}`}>
      <ul className="patterns__elementsList">
        {Object.keys(patterns).map((patternKey: string) => {
          const pattern = patterns[patternKey] as PatternI;

          return (
            <li
              key={patternKey}
              className="patterns__element"
              onClick={() => selectPattern(pattern)}
            >
              <img className="patterns__elementImage" src={pattern.url} />
              <div>{pattern.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
