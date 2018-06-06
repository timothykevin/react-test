import React, { Component } from 'react';
import { withStyles } from '@gdp/react-app/lib/helpers/withStyles';

const logo = require('./logo.svg');

@withStyles(require('./App.scss'))
export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
