import React, { Component } from 'react';
import { Router, Link } from "@reach/router";
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import Artist from './Components/Artist';
import Album from './Components/Album';
import GetArtists from './Components/GetArtists';
import CreateAlbum from './Components/CreateAlbum';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <GetArtists path= "/" />
          <Artist path= "/artist/:artistID" />
          <Album path= "/album/:albumID" />
        </Router>
      </div>
    );
  }
}

export default App;
