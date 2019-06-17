import React, { Component } from 'react'

class GetArtists extends Component{
    constructor() {
        super();
        this.state = {
            artists: []
        }
    }

    componentDidMount() {
        fetch('/artist')
        .then(res => res.json())
        .then(body => this.setState({artists: body}, console.log('Fetched: ', body)))
        .catch(error => console.log(error))
    }
    render() {
        return(
            <div>
            <h2>Artists</h2>
            <ul>
                {this.state.artists.map(artist => 
                    <li key={artist._id}>{artist.artist_name}</li>
                )}
            </ul>
        </div>
        )
    }
}

export default GetArtists;