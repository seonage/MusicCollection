import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import GetArtists from './Components/GetArtists';
import Artist from './Components/Artist';
import Album from './Components/Album';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path = "/" component = { GetArtists } />
        <Route path = "/artist/:artistID" component = { Artist }/>
        <Route path = "/album/:albumID" component = { Album }/>
      </div>
      </Router>
    );
  }
}

export default App;
