import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Artist extends Component{
    constructor(props) {
        super(props);
        this.state ={
            artistID: props.match.params.artistID,
            artistAlbums: [],
            artistBiography: []
        }
}

    componentDidMount() {
        let artistURI = '/artist/' + this.state.artistID;

        fetch(artistURI)
        .then(res => res.json())
        .then(body => this.setState({artistBiography: body.artist_biography}))
        .catch(error => console.log(error))

        fetch(artistURI)
        .then(res => res.json())
        .then(body => this.setState({artistAlbums: body.albums}))
        .catch(error => console.log(error))
    }

    render() {
        return(
            <div>
            <h2>Artist Biography</h2>
            {this.state.artistBiography}
            <h2>Albums</h2>
            <ul>
                {this.state.artistAlbums.map(album => 
                    <li key={album._id}><Link to = {'../album/' + album._id}>{album.title}</Link></li>
                )}
                </ul>
            <Link to= '/'>Return to list of artists</Link>
            </div>
            
        )
    }

}

export default Artist;