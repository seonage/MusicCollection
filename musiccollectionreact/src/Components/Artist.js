import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Artist extends Component{
    constructor(props) {
        super(props);
        this.state ={
            artistID: props.match.params.artistID,
            artistInfo: []
        }
}

    componentDidMount() {
        let artistURI = '/artist/' + this.state.artistID;

        fetch(artistURI)
        .then(res => res.json())
        .then(body => this.setState({artistInfo: body}))
        .catch(error => console.log(error))
    }

    render() {
        return(
            <div>
            <h2>Albums</h2>
            <ul>
                {this.state.artistInfo.map(artist => 
                    <li key={artist._id}>{artist.title}</li>
                )}
            </ul>
            <Link to= '/'>Return to list of artists</Link>
            </div>
        )
    }

}

export default Artist;