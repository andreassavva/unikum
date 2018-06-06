import React, { Component } from 'react';
import './App.css';
import TitleBar from './components/TitleBar/TitleBar';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TitleBar />
        <Main />
      </div>
    );
  }
}

export default App;
