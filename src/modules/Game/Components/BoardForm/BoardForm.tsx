import React from "react";
import Slider from "rc-slider";
import "./boardForm.css";
import "rc-slider/assets/index.css";

interface PropsI {
  tableColumns: number;
  tableRows: number;
  sliderTimeValue: number;
  setColumns: (value: string) => void;
  setRows: (value: string) => void;
  setSliderTimeValue: (position: number) => void;
}

export const BoardForm = ({
  tableColumns,
  tableRows,
  sliderTimeValue,
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
          min={0}
          max={5}
          value={sliderTimeValue}
          step={1}
          onChange={setSliderTimeValue}
        />
      </div>
    </div>
  );
};
