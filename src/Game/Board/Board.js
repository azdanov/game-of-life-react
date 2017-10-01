// @flow
import React, { Component } from 'react';
import Cell from './Cell/Cell';
import Create2DArray from '../../utils/create2DArray';
import './Board.css';

type Props = {
  columns: number,
  rows: number,
  board: Array<any>,
};

class Board extends Component<Props, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      board: this.init(),
    };
  }

  componentWillReceiveProps() {
    this.setState({ board: this.init() });
  }

  init(): Array<Array<Cell>> {
    const board = Create2DArray(this.props.rows);

    for (let i = 0; i < this.props.columns; i += 1) {
      for (let j = 0; j < this.props.rows; j += 1) {
        board[i][j] = (
          <Cell
            key={`${i}${j}`}
            state={this.props.board[i][j].state}
            previousState={this.props.board[i][j].previousState}
          />
        );
      }
    }
    return board;
  }

  render() {
    return <div className="board">{this.state.board}</div>;
  }
}

export default Board;
