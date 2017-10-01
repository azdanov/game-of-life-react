// @flow
import React, { Component } from 'react';
import './Game.css';
import Board from './Board/Board';
import GameOfLife from './GOL/GameOfLife';

class Game extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.game = new GameOfLife(10, 10);
    this.state = {
      generation: 1,
    };
    this.interval = setInterval(() => {
      this.game.generate();
      this.setState({ generation: this.state.generation + 1 });
    }, 1000 / 2);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  game = {};
  interval: number;

  render() {
    return (
      <Board
        columns={this.game.columns}
        rows={this.game.rows}
        board={this.game.board}
      />
    );
  }
}

export default Game;
