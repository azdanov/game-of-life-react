// @flow
import React from 'react';
import './Header.css';

const Header = (props: { generation: number }) => (
  <header>
    <h1>Game of Life - React</h1>
    <p>Generation: {props.generation}</p>
  </header>
);

export default Header;
