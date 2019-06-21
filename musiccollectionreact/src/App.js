import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import GetArtists from './Components/GetArtists';
import Artist from './Components/Artist';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path = "/" component = { GetArtists } />
        <Route path = "/artist/:artistID" component = { Artist }/>
      </div>
      </Router>
    );
  }
}

export default App;
