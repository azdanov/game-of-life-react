// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './App/Game';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
