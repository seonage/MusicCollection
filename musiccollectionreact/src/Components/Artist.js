import React, { Component, Fragment } from 'react';
import { Link } from "@reach/router";
import CreateAlbum from './CreateAlbum';

class Artist extends Component{
    constructor(props) {
        super(props);
        this.state ={
            artistID: props.artistID,
            artistAlbums: [],
            artistBiography: '',
            editMode: false
        }

        this.toggleEditMode = this.toggleEditMode.bind(this)
        this.deleteArtist = this.deleteArtist.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
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

    toggleEditMode() {
        return (this.state.editMode ? this.setState({editMode: false}) : this.setState({editMode: true}))
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

    handleChange(event) {
        this.setState({artistBiography: event.target.value})
    }

    handleEditSubmit(event) {
        let artistURI = '/artist/' + this.state.artistID;

        fetch(artistURI, { /* Need to create route for editing an artist on the Express backend */
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                artistBiography: this.state.artistBiography
            })
        })
        //.then(this.props.history.push('/'))
    }

    render() {
        return(
            <div>
                {this.state.editMode ? (
                    <Fragment>
                        <form>
                            <h2>Artist Biography</h2>
                            <input type="text" name="artistBiography" value={this.state.artistBiography} onChange={this.handleChange} />
                            <button onClick = {(this.handleEditSubmit)}>Submit Changes</button>
                            <button onClick = {(this.toggleEditMode)}>Cancel Editing</button>
                        </form>
                    </Fragment>
                ) : (
                    <Fragment>
                        <h2>Artist Biography</h2>
                        {this.state.artistBiography}
                        <h2>Albums</h2>
                            <ul>
                            {   this.state.artistAlbums.map(album => 
                                <li key={album._id}><Link to = {'/album/' + album._id}>{album.title}</Link></li>
                            )}
                            </ul>
                        <Link to= '/'>Return to list of artists</Link>
                        <button onClick = {this.toggleEditMode}>Edit Artist</button>
                        <button onClick = {this.deleteArtist}>Delete Artist</button>
                    </Fragment>

                )}
                <CreateAlbum />
            </div>
        )
    }
}

export default Artist