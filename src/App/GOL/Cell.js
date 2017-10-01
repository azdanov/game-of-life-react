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

  display() {
    // let color = '';
    // if (this.previousState === 0 && this.state === 1) {
    //   color = 'blue';
    // } else if (this.state === 1) {
    //   color = 'transparent';
    // } else if (this.previousState === 1 && this.state === 0) {
    //   color = 'red';
    // } else {
    //   color = 'black';
    // }
    // return color;
    let color = '';
    if (this.previousState === 0 && this.state === 1) {
      color = '  ';
    } else if (this.state === 1) {
      color = '*';
    } else if (this.previousState === 1 && this.state === 0) {
      color = '  ';
    } else {
      color = '  ';
    }
    return color;
  }
}

export default Cell;
