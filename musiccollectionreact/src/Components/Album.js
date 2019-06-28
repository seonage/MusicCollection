import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Album extends Component{
    constructor(props) {
        super(props);
        this.state ={
            albumID: props.match.params.albumID,
            albumInfo: []
        }
}

    componentDidMount() {
        let albumURI = '/album/' + this.state.albumID;
        console.log(albumURI)
        fetch(albumURI)
        .then(res => res.json())
        .then(body => this.setState({albumInfo: body}))
        .catch(error => console.log(error))
    }

    render() {
        return(
            <div>
            <h2>{this.state.albumInfo.title}</h2>
            <Link to= '/'>Return to list of artists</Link>
            </div>
        )
    }

}

export default Album;