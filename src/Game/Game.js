// @flow
import React, { Component } from 'react';
import Board from './Board/Board';
import GameOfLife from './GOL/GameOfLife';
import { getWidth, getHeight } from '../utils/browserWidthHeight';

class Game extends Component<any, any> {
  constructor(props: any) {
    super(props);

    const width = getWidth();
    const height = getHeight();

    this.state = {
      width,
      height,
      generation: 1,
    };

    this.game = new GameOfLife(Math.floor(width / 44), Math.floor(height / 44));

    this.interval = setInterval(() => {
      this.game.generate();
      this.setState({ generation: this.state.generation + 1 });
    }, 1000 / 3);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  game = {};
  interval: number;

  render() {
    return (
      <Board
        width={this.state.width}
        height={this.state.height}
        columns={this.game.columns}
        rows={this.game.rows}
        board={this.game.board}
      />
    );
  }
}

export default Game;
