// @flow
import React from 'react';
import './Cell.css';

const Cell = (props: { state: number, previousState: number }) => {
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

  return <div className={cellState} />;
};

export default Cell;
