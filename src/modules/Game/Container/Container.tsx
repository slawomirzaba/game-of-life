import React, { useState, useEffect } from "react";
import { times as _times } from "lodash";
import { ActiveElementsKeysI, PatternI } from "../interfaces";
import { Header } from "../Components/Header";
import { Board } from "../Components/Board";
import "./game.css";
import { getCellKey, getNewCellState } from "../lib";
import { usePositiveInteger, useToggle } from "../hooks";

export const Container = () => {
  const DEFAULT_REFRESH_TIME = 200;
  const INITIAL_ROWS_NUMBER = 20;
  const INITIAL_COLUMNS_NUMBER = 20;
  const INITIAL_ACTIVE_ELEMENTS_KEYS: ActiveElementsKeysI = {};
  const SLIDER_VALUES = {
    0: 3000,
    1: 1000,
    2: 500,
    3: DEFAULT_REFRESH_TIME,
    4: 50,
    5: 20
  };

  const [columns, setColumns] = usePositiveInteger(INITIAL_ROWS_NUMBER);
  const [rows, setRows] = usePositiveInteger(INITIAL_COLUMNS_NUMBER);
  const [iteration, setIteration] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isBorders, toggleBorders] = useToggle(true);
  const [isColorDrawing, setColorDrawing] = useState(true);
  const [activeElementsKeys, setActiveElementsKeys] = useState(
    INITIAL_ACTIVE_ELEMENTS_KEYS
  );
  const [sliderTimeValue, setSliderTimeValue] = useState(3);

  useEffect(
    () => {
      setTimeout(() => {
        isPlay && executeOneIteration();
      }, SLIDER_VALUES[sliderTimeValue]);
    },
    [iteration, isPlay]
  );

  const toggleActiveElementKey = (key: string): void => {
    setActiveElementsKeys((prevActiveElementsKeys: ActiveElementsKeysI) => {
      const newActiveElementsKeys = { ...prevActiveElementsKeys };

      if (newActiveElementsKeys[key]) delete newActiveElementsKeys[key];
      else newActiveElementsKeys[key] = true;

      return newActiveElementsKeys;
    });
  };

  const setStateElementKey = (key: string, value: boolean): void => {
    setActiveElementsKeys((prevActiveElementsKeys: ActiveElementsKeysI) => {
      const newActiveElementsKeys = { ...prevActiveElementsKeys };

      if (value) newActiveElementsKeys[key] = true;
      else delete newActiveElementsKeys[key];

      return newActiveElementsKeys;
    });
  };

  const playAction = () => {
    setIsPlay(true);
  };

  const pauseAction = () => {
    setIsPlay(false);
  };

  const clearBoard = () => {
    setActiveElementsKeys({});
  };

  const selectPattern = (pattern: PatternI) => {
    if (isPlay) return;

    const minColumns = pattern.minColumns || INITIAL_COLUMNS_NUMBER;
    const minRows = pattern.minRows || INITIAL_ROWS_NUMBER;

    setColumns(minColumns);
    setRows(minRows);
    setActiveElementsKeys(pattern.structure);
  };

  const onMouseDownElement = (elementKey: string) => {
    if (isPlay) return;

    setIsDragging(true);
    setColorDrawing(!activeElementsKeys[elementKey]);
    toggleActiveElementKey(elementKey);
  };

  const onMouseEnterElement = (keyElement: string) => {
    if (!isDragging || isPlay) return;

    setStateElementKey(keyElement, isColorDrawing);
  };

  const onMouseUpBoard = () => {
    setIsDragging(false);
  };

  const onMouseLeaveBoard = () => {
    setIsDragging(false);
  };

  const executeOneIteration = () => {
    let isAnyValueChanged = false;
    const currentActiveElementsKeys = activeElementsKeys;
    const newActiveElementsKeys: ActiveElementsKeysI = {
      ...activeElementsKeys
    };

    _times(rows).forEach(rowIndex => {
      _times(columns).forEach(columnIndex => {
        const key = getCellKey(rowIndex, columnIndex);
        const newCellValue = getNewCellState(
          key,
          rows,
          columns,
          currentActiveElementsKeys
        );

        if (newCellValue === Boolean(activeElementsKeys[key])) return;

        isAnyValueChanged = true;
        if (newCellValue) newActiveElementsKeys[key] = newCellValue;
        else delete newActiveElementsKeys[key];
      });
    });

    if (isAnyValueChanged) {
      setActiveElementsKeys(newActiveElementsKeys);
      setIteration((prevIteration: number) => prevIteration + 1);
    } else {
      setIsPlay(false);
    }
  };

  return (
    <div className="game">
      <Header
        tableColumns={columns}
        tableRows={rows}
        setColumns={setColumns}
        setRows={setRows}
        selectPattern={selectPattern}
        isPlay={isPlay}
        setSliderTimeValue={setSliderTimeValue}
        sliderTimeValue={sliderTimeValue}
      />
      <Board
        tableColumns={columns}
        tableRows={rows}
        isBorders={isBorders}
        toggleActiveElementKey={toggleActiveElementKey}
        activeElementsKeys={activeElementsKeys}
        playAction={playAction}
        executeOneIteration={executeOneIteration}
        pauseAction={pauseAction}
        isPlayEnabled={isPlay}
        clearBoard={clearBoard}
        onMouseDownElement={onMouseDownElement}
        onMouseEnterElement={onMouseEnterElement}
        onMouseUpBoard={onMouseUpBoard}
        onMouseLeaveBoard={onMouseLeaveBoard}
        toggleBorders={toggleBorders}
      />
    </div>
  );
};
