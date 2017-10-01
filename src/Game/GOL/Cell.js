// @flow
class Cell {
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;

    this.state = Math.round(Math.random());
    this.previousState = this.state;
  }

  x = 0;
  y = 0;
  state = 0;
  previousState = 0;

  updatePreviousState() {
    this.previousState = this.state;
  }

  newState(newState: number) {
    this.state = newState;
  }
}

export default Cell;
