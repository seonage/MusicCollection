import React, { Component } from 'react'
import { Link } from "@reach/router";
import CreateArtist from './CreateArtist';

class GetArtists extends Component{
    constructor() {
        super();
        
        this.state = {
            artists: [],
            searchValue: ''
        }

        this.artistFilterOnChange = this.artistFilterOnChange.bind(this);
    }

    componentDidMount() {
        /*fetch('/artist')
        .then(res => res.json())
        .then(body => this.setState({artists: body}, console.log('Fetched: ', body)))
        .catch(error => console.log(error))*/
    }

    artistFilterOnChange = (event) => {
        console.log("Artist Filter: ", event.target.value)
        this.setState({
            searchValue: event.target.value
        })
    }

    render() {
        const filteredArtists = this.state.artists.filter(artist => {
            return artist.artist_name.includes(this.state.searchValue);
        })
        console.log("Filtered artists :" + filteredArtists.map(artist => artist.artist_name));

        return(
            <div>
            <h2>Artists</h2>
            <label>Search For An Artist</label>
                <input type="text" onChange={this.artistFilterOnChange} />
                <ul>
                {filteredArtists.map(artist => 
                    <li key={artist._id}><Link to= {'artist/' + artist._id}>{artist.artist_name}</Link></li>
                )}
            </ul>
            <><CreateArtist /></>
            </div>
        )
    }
}

export default GetArtists;