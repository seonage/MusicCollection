import React, { Component } from 'react';
import './App.css';
import GetArtists from './Components/GetArtists'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetArtists />
      </div>
    );
  }
}

export default App;
