import React, { Component } from 'react';
import './App.css';
import DropingList from '../src/containers/DropingList/DropingList';

class App extends Component {
  render() {
    return (
      <div className="App">
      Lets checkout who is she...
        <DropingList />
      </div>
    );
  }
}

export default App;
