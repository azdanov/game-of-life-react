// @flow
import React, { Component } from 'react';
import Board from './Board/Board';
import GameOfLife from './GOL/GameOfLife';
import Menu from './Menu/Menu';
import Header from './Header/Header';
import getMaxSize, { getHeight, getWidth } from '../utils/getMaxSize';

class Game extends Component<any, any> {
  constructor(props: any) {
    super(props);

    let maxSize = Math.floor(getMaxSize / 100) * 100;
    if (getHeight() < getWidth()) {
      maxSize -= 100;
    }

    const width = maxSize;
    const height = maxSize;
    this.cellSize = 25;

    const columns = Math.floor(width / this.cellSize);
    const rows = Math.floor(height / this.cellSize);

    this.state = {
      width,
      height,
      active: true,
      generation: 1,
      clicked: [],
    };

    this.game = new GameOfLife(columns, rows);
  }

  componentDidMount() {
    this.startGame();
  }

  componentWillUnmount() {
    this.stopGame();
  }

  stopGame() {
    clearInterval(this.interval);
    this.setState({ clicked: [] });
  }

  startGame(modifier: number = 5) {
    const second = 1000;
    this.interval = setInterval(() => {
      this.game.generate();
      this.setState({ generation: this.state.generation + 1 });
    }, second / modifier);
  }

  handleStartStop = () => {
    if (this.state.active) {
      this.stopGame();
    } else {
      if (this.state.generation === 0 && !this.state.clicked.length) {
        this.game.init();
      }
      this.startGame();
    }
    this.setState({ active: !this.state.active });
  };

  handleClear = () => {
    this.stopGame();
    this.game.clear();
    this.setState({ generation: 0, active: false });
  };

  handleAddCell = (x: number, y: number) => {
    this.game.board[x][y].newState(1).updatePreviousState();
    this.setState({ clicked: [...this.state.clicked, { x, y }] });
  };

  cellSize = 0;
  game = {};
  interval: number;

  render() {
    return [
      <Header key="1" generation={this.state.generation} />,
      <Board
        key="2"
        width={this.state.width}
        height={this.state.height}
        columns={this.game.columns}
        rows={this.game.rows}
        board={this.game.board}
        cellSize={this.cellSize}
        handleAddCell={this.handleAddCell}
      />,
      <Menu
        key="3"
        active={this.state.active}
        handleStartStop={this.handleStartStop}
        handleClear={this.handleClear}
      />,
    ];
  }
}

export default Game;
