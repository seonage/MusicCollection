import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import EditArtist from './EditArtist'

class Artist extends Component{
    constructor(props) {
        super(props);
        this.state ={
            artistID: props.match.params.artistID,
            artistAlbums: [],
            artistBiography: [],
            editMode: false
        }

        this.deleteArtist = this.deleteArtist.bind(this);
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

    deleteArtist() {
        let artistURI = '/artist/' + this.state.artistID + '/delete';

        fetch(artistURI, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
        })
        .then(this.props.history.push('/'))

    }

    render() {
        return(
            <div>
                {this.state.editMode ? (
                    <Fragment>
                        <EditArtist/>
                    </Fragment>
                ) : (
                    <Fragment>
                        <h2>Artist Biography</h2>
                        {this.state.artistBiography}
                        <h2>Albums</h2>
                            <ul>
                            {   this.state.artistAlbums.map(album => 
                                <li key={album._id}><Link to = {'../album/' + album._id}>{album.title}</Link></li>
                            )}
                            </ul>
                        <Link to= '/'>Return to list of artists</Link>
                        <button onClick = {this.deleteArtist}>Delete Artist</button>
                    </Fragment>

                )}
            </div>
        )
    }
}

export default Artist