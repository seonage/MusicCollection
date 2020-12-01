import React, { Component } from 'react';

class CreateAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = { artistName: '', newAlbumName: '', artists: [] };

        this.handleArtistSelect = this.handleArtistSelect.bind(this);
        this.handleAlbumNameChange = this.handleAlbumNameChange.bind(this);
    }

    componentDidMount() {
        fetch('/artist')
        .then(res => res.json())
        .then(body => this.setState({artists: body, artistName: body[0].artist_name}, console.log('Fetched: ' , body)))
        .then(this.setState({artistName: this.state.artists[0]}), console.log("first?"))
        .catch(error => console.log(error))
    }

    handleAlbumNameChange(event) {
        this.setState({newAlbumName: event.target.value});
    }

    handleArtistSelect(event) {
        this.setState({artistName: event.target.value});
    }

    handleSubmit(event) {
        /*fetch('album/create', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                artist: this.state.artistName
            })
        })*/
    }

    render() {
        let artists = this.state.artists;
        let artistOptions = artists.map( (artist) => <option key = {artist._id} 
        value = {artist.artist_name}>{artist.artist_name}</option>);

        return (
            <div>
                <h3>Add New Album</h3>
                <form onSubmit = {this.handleSubmit}>
                    <label>Select Artist
                        <select onChange = {this.handleArtistSelect}>
                            {artistOptions}
                        </select>
                    </label>
                    <br/>
                    <label>
                        <input type="text" name="newAlbumName" value={this.state.newAlbumName} onChange={this.handleAlbumNameChange}/>
                    </label>
                    <input type="submit" name="Submit"/>
                </form>
            </div>
        )
    }
}

export default CreateAlbum;