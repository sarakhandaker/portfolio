import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Project extends Component {
    state = {}

    _onReady(event) {
        event.target.pauseVideo();
    }
    render() {
        const opts = {
            height: '270',
            width: '450',
            playerVars: { autoplay: 1 }
        };
        return (
        <div class="col-sm-6">
            <div className="card bg-light mb-3" style={{"width": "18rem;"}}>
                <br/>
                <YouTube videoId={this.props.url} opts={opts} onReady={this._onReady} />
                <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go To Website</a>
                </div>
            </div>
        </div>
        )
    }
}

export default Project;