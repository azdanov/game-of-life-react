// @flow
import React, { Component } from 'react';
import Cell from './Cell/Cell';
import Create2DArray from '../../utils/create2DArray';
import './Board.css';

type Props = {
  columns: number,
  rows: number,
  board: any,
};

class Board extends Component<Props, any> {
  state = { board: [] };

  componentWillMount() {
    this.init();
  }

  init() {
    const columns = this.props.columns;
    const rows = this.props.rows;
    const board = Create2DArray(columns);

    for (let i = 0; i < columns; i += 1) {
      for (let j = 0; j < rows; j += 1) {
        board[i][j] = (
          <Cell
            key={`${i}${j}`}
            state={this.props.board[i][j].state}
            previousState={this.props.board[i][j].previousState}
          />
        );
      }
    }
    this.setState({ board });
  }

  render() {
    return <div className="board">{this.state.board}</div>;
  }
}

export default Board;
