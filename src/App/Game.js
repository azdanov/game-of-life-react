// @flow
import React, { Component } from 'react';
import './Game.css';
import Board from './Board/Board';
import GameOfLife from './GOL/GameOfLife';

class App extends Component<any> {
  constructor(props: any) {
    super(props);
    this.game = new GameOfLife(10, 10);
    // this.game.generate();
  }

  game = {};

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

export default App;
