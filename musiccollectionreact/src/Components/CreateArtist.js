import React, { Component } from 'react';

class CreateArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {artistName: '', artistBiography: ''};

        this.handleArtistNameChange = this.handleArtistNameChange.bind(this);
        this.handleArtistBiographyChange = this.handleArtistBiographyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleArtistNameChange(event) {
        this.setState({artistName: event.target.value});
    }

    handleArtistBiographyChange(event) {
        this.setState({artistBiography: event.target.value});
    }

    handleSubmit(event) {
        fetch('/artist/create', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                artistName: this.state.artistName,
                artistBiography: this.state.artistBiography
            })
        })
    }

    render() {
        return (
            <div>
                <h3>Add New Artist</h3>
                <form onSubmit={this.handleSubmit}>
                <label>Artist Name
                    <input type="text" name="artistName" value={this.state.artistName} onChange={this.handleArtistNameChange}/>
                </label>
                <br/>
                <label>Biography
                    <input type="text" name="artistBio" value={this.state.artistBiography} onChange={this.handleArtistBiographyChange}/>
                </label>
                <br/>
                <input type="submit" name="Submit"/>
                </form>
            </div>
        )
    }
}

export default CreateArtist;