import React, { Component } from 'react';

class CreateAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = { artistName: '', newAlbumName: '', artists: [] };

        this.artistSelect = this.artistSelect.bind(this);
    }

    componentDidMount() {
        fetch('/artist')
        .then(res => res.json())
        .then(body => this.setState({artists: body}, console.log('Fetched: ', body)))
        .catch(error => console.log(error))
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

    artistSelect(event) {
        this.setState({artistName: event.target.value});
    }

    render() {
        let artists = this.state.artists;
        let artistOptions = artists.map( (artist) => <option key = {artist._id} 
        value = {artist.artist_name}>{artist.artist_name}</option>);

        return (
            <div>
                <h3>Add New Album</h3>
                <form onSubmit = {this.handleSubmit} onChange = {this.artistSelect}>
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