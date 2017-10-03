// @flow
import React from 'react';
import './Cell.css';

const Cell = (props: {
  state: number,
  cellSize: number,
  x: number,
  y: number,
  previousState: number,
  handleAddCell: Function,
}) => {
  let cellState = 'cell ';

  if (props.previousState === 0 && props.state === 1) {
    cellState += 'birth';
  } else if (props.state === 1) {
    cellState += 'alive';
  } else if (props.previousState === 1 && props.state === 0) {
    cellState += 'death';
  } else {
    cellState += 'absent';
  }

  const handleClick = (event: SyntheticMouseEvent<HTMLDivElement>) => {
    const { target } = event;

    if (target instanceof window.HTMLDivElement) {
      target.blur();
      props.handleAddCell(props.x, props.y);
    }
  };

  const handleKeyPress = (event: SyntheticKeyboardEvent<HTMLDivElement>) => {
    if (event.charCode === 13 || event.charCode === 32) {
      event.preventDefault();
      event.stopPropagation();
      const { target } = event;

      if (target instanceof window.HTMLDivElement) {
        target.blur();
        props.handleAddCell(props.x, props.y);
      }
    }
  };

  return (
    <div
      tabIndex="0"
      role="button"
      aria-label={`Cell ${props.x}${props.y}`}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      className={cellState}
      style={{ width: props.cellSize, height: props.cellSize }}
    />
  );
};

export default Cell;
