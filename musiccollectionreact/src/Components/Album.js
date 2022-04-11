import React, { Component } from 'react';
import { Link, navigate } from "@reach/router";

class Album extends Component{
    constructor(props) {
        super(props);
        this.state ={
            albumID: props.albumID,
            albumInfo: []
        }

        this.deleteAlbum = this.deleteAlbum.bind(this);
}

    componentDidMount() {
        let albumURI = '/album/' + this.state.albumID;
        console.log("Comp did mount: " + albumURI)

        fetch(albumURI)
        .then(res => res.json())
        .then(body => this.setState({albumInfo: body}))
        .catch(error => console.log(error))
    }

    deleteAlbum() {
        let albumURI = '/album/' + this.state.albumID + '/delete';
        console.log("Delete worked: " + albumURI);

        fetch(albumURI, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(navigate("/"))
    }

    render() {
        return(
            <div>
            <h2>{this.state.albumInfo.title}</h2>
            <button onClick = {this.deleteAlbum}>Delete Album</button>
            <Link to= '/'>Return to list of artists</Link>
            </div>
        )
    }

}

export default Album;