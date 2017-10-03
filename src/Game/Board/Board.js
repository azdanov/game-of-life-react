// @flow
import React, { Component } from 'react';
import Cell from './Cell/Cell';
import './Board.css';

type Props = {
  width: number,
  height: number,
  columns: number,
  rows: number,
  cellSize: number,
  handleAddCell: Function,
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
    const board = [];
    for (let i = 0; i < this.props.columns; i += 1) {
      for (let j = 0; j < this.props.rows; j += 1) {
        if (!board[i]) board[i] = [];
        board[i][j] = (
          <Cell
            key={`${i}-${j}`}
            x={i}
            y={j}
            state={this.props.board[i][j].state}
            previousState={this.props.board[i][j].previousState}
            cellSize={this.props.cellSize}
            handleAddCell={this.props.handleAddCell}
          />
        );
      }
    }
    return board;
  }

  render() {
    return (
      <div
        className="board"
        style={{
          width: `${this.props.width}px`,
          height: `${this.props.height}px`,
        }}
      >
        {this.state.board}
      </div>
    );
  }
}

export default Board;
