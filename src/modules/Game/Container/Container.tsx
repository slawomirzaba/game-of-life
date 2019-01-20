import React, { useState, useEffect } from "react";
import { times as _times } from "lodash";
import { ActiveElementsKeysI } from "../interfaces";
import { Header } from "../Components/Header";
import { Board } from "../Components/Board";
import "./game.css";
import { getCellKey, getNewCellState } from "../lib";
import { useIntegerInput } from "../hooks";

export const Container = () => {
  const REFRESH_TIME = 200;
  const INITIAL_ROWS_NUMBER = 20;
  const INITIAL_COLUMNS_NUMBER = 20;
  const INITIAL_ACTIVE_ELEMENTS_KEYS: ActiveElementsKeysI = {};

  const [columns, setColumns] = useIntegerInput(INITIAL_ROWS_NUMBER);
  const [rows, setRows] = useIntegerInput(INITIAL_COLUMNS_NUMBER);
  const [iteration, setIteration] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isBorders, setIsBorders] = useState(true);
  const [activeElementsKeys, setActiveElementsKeys] = useState(
    INITIAL_ACTIVE_ELEMENTS_KEYS
  );

  useEffect(
    () => {
      setTimeout(() => {
        isPlay && executeOneIteration();
      }, REFRESH_TIME);
    },
    [iteration, isPlay]
  );

  const toggleActiveElementKey = (key: string): void => {
    setActiveElementsKeys((prevActiveElementsKeys: ActiveElementsKeysI) => {
      const newActiveElementsKeys = { ...prevActiveElementsKeys };

      if (newActiveElementsKeys[key]) delete newActiveElementsKeys[key];
      else newActiveElementsKeys[key] = true;

      console.log(JSON.stringify(newActiveElementsKeys));
      return newActiveElementsKeys;
    });
  };

  const playAction = () => {
    setIsPlay(true);
  };

  const pauseAction = () => {
    setIsPlay(false);
  };

  const toggleBorders = () => {
    setIsBorders(prevIsBorders => !prevIsBorders);
  };

  const clearBoard = () => {
    setActiveElementsKeys({});
  };

  const onMouseDownElement = (elementKey: string) => {
    if (isPlay) return;

    setIsDragging(true);
    toggleActiveElementKey(elementKey);
  };

  const onMouseEnterElement = (keyElement: string) => {
    if (!isDragging || isPlay) return;

    toggleActiveElementKey(keyElement);
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
