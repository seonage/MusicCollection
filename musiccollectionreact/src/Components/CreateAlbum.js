import React, { Component } from 'react';

class CreateAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = { newArtistName: '', newAlbumName: '', artists: [] };
    }

    componentDidMount() {
        fetch('/artist')
        .then(res => res.json())
        .then(body => this.setState({artists: body}, console.log('Fetched: ', body)))
        .catch(error => console.log(error))
    }

    render() {
        let artists = this.state.artists;
        let artistOptions = artists.map( (artist) => <option key = {artist._id}>{artist.artist_name}
        </option>);

        return (
            <div>
                <h3>Add New Album</h3>
                <form onSubmit = {this.handleSubmit}>
                    <label>Select Artist
                        <select>
                            {artistOptions}
                        </select>
                    </label>
                    <br/>
                    <input type="submit" name="Submit"/>
             </form>
            </div>
        )
    }
}

export default CreateAlbum;