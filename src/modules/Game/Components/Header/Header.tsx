import React from "react";
import "./header.css";
import { BoardForm } from "../BoardForm";
import { Patterns } from "../Patterns";
import { PatternI, SliderConfigI } from "../../interfaces";

interface PropsI {
  tableColumns: number;
  tableRows: number;
  isPlay: boolean;
  sliderTimeValue: number;
  sliderConfig: SliderConfigI;
  setColumns: (columns: string) => void;
  setRows: (rows: string) => void;
  setSliderTimeValue: (position: number) => void;
  selectPattern: (pattern: PatternI) => void;
}

export const Header = ({
  tableColumns,
  tableRows,
  isPlay,
  sliderTimeValue,
  sliderConfig,
  setColumns,
  setRows,
  selectPattern,
  setSliderTimeValue
}: PropsI) => {
  return (
    <div className="header">
      <BoardForm
        tableColumns={tableColumns}
        tableRows={tableRows}
        setColumns={setColumns}
        setRows={setRows}
        setSliderTimeValue={setSliderTimeValue}
        sliderTimeValue={sliderTimeValue}
        sliderConfig={sliderConfig}
      />
      <Patterns selectPattern={selectPattern} isPlay={isPlay} />
    </div>
  );
};
