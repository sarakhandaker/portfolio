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
            width: '80%',
            playerVars: { autoplay: 1 }
        };
        return (
        <div class="col-sm-6">
            <div className="card bg-light mb-3 cardproject" style={{"width": "8rem;"}}>
                <br/>
                <YouTube videoId={this.props.url} opts={opts} onReady={this._onReady} />
                <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text">{this.props.service}</p>
                    {this.props.website? <a href={this.props.website} class="btn btn-primary">Go To Website</a>: null}
                    <a href={this.props.git} class="btn btn-secondary">Go To Github</a>
                </div>
            </div>
        </div>
        )
    }
}

export default Project;