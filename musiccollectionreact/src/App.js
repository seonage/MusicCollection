import React, { Component } from 'react';
//import { Router, Link } from "@reach/router";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Artist from './Components/Artist';
import ArtistHook from './Components/ArtistHook';
import Album from './Components/Album';
import GetArtists from './Components/GetArtists';
import CreateAlbum from './Components/CreateAlbum';

function App(){
    return (
      <div>
        <Router>
          <Routes>
            <Route path= "/" element={<GetArtists/>} />
            <Route path= "/artist" element={<GetArtists/>} />
            <Route path= "/artist/:artistID" element={<ArtistHook />} />
            <Route path= "/album/:albumID" element={<Album />} />
          </Routes>
        </Router>
      </div>
    );
}

export default App;
