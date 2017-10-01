// @flow
import React from 'react';
import './Cell.css';

const Cell = (props: { state: number, previousState: number }) => {
  let classNames = 'cell ';
  if (props.previousState === 0 && props.state === 1) {
    classNames += 'blue';
  } else if (props.state === 1) {
    classNames += 'transparent';
  } else if (props.previousState === 1 && props.state === 0) {
    classNames += 'red';
  } else {
    classNames += 'black';
  }

  return <div className={classNames} />;
};

export default Cell;
