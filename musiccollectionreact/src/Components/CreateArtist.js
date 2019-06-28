import React, { Component } from 'react';

class CreateArtist extends Component {
    render() {
        return (
            <div>
                <h3>Add New Artist</h3>
                <form action="" method="POST">
                <label>Artist Name
                    <input type="text" name="artistName"/>
                </label>
                <br/>
                <label>Biography
                    <input type="text" name="artistBio"/>
                </label>
                <br/>
                <input type="submit" name="Submit"/>
                </form>
            </div>
        )
    }
}

export default CreateArtist;