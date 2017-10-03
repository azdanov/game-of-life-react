// @flow
import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component<any> {
  handleStartStop = (event: SyntheticMouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const { target } = event;
    if (target instanceof window.HTMLButtonElement) {
      target.blur();
      this.props.handleStartStop();
    }
  };

  handleClear = (event: SyntheticMouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const { target } = event;
    if (target instanceof window.HTMLButtonElement) {
      target.blur();
      this.props.handleClear();
    }
  };

  render() {
    const startStop = this.props.active ? 'Stop' : 'Start';
    return (
      <nav className="menu">
        <div>
          <button onClick={this.handleStartStop} aria-label={startStop}>
            {startStop}
          </button>
          <button onClick={this.handleClear} aria-label="Clear">
            Clear
          </button>
        </div>
      </nav>
    );
  }
}

export default Menu;
