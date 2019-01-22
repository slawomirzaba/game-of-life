import React from "react";
import Slider from "rc-slider";
import { SliderConfigI } from "../../interfaces";
import "./boardForm.css";
import "rc-slider/assets/index.css";

interface PropsI {
  tableColumns: number;
  tableRows: number;
  sliderTimeValue: number;
  sliderConfig: SliderConfigI;
  setColumns: (value: string) => void;
  setRows: (value: string) => void;
  setSliderTimeValue: (position: number) => void;
}

export const BoardForm = ({
  tableColumns,
  tableRows,
  sliderTimeValue,
  sliderConfig,
  setColumns,
  setRows,
  setSliderTimeValue
}: PropsI) => {
  return (
    <div className="boardForm">
      <div className="boardForm__field">
        <label className="boardForm__fieldLabel">Columns:</label>
        <input
          className="boardForm__fieldInput"
          type="number"
          value={tableColumns}
          onChange={e => setColumns(e.target.value)}
        />
      </div>
      <div className="boardForm__field">
        <label className="boardForm__fieldLabel">Rows:</label>
        <input
          className="boardForm__fieldInput"
          type="number"
          value={tableRows}
          onChange={e => setRows(e.target.value)}
        />
      </div>
      <div className="boardForm__field">
        <label className="boardForm__fieldLabel">Time interval</label>
        <Slider
          min={sliderConfig.min}
          max={sliderConfig.max}
          value={sliderTimeValue}
          onChange={setSliderTimeValue}
        />
      </div>
    </div>
  );
};
