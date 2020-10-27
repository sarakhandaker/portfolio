import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Project extends Component {
    state = {}

    _onReady(event) {
        event.target.pauseVideo();
    }
    render() {
        const opts = {
            height: '300px',
            width: '80%'
        };
        return (
        <div className="col-lg-8">
            <div className="card bg-light mb-3 cardproject" style={{"width": "8rem;"}}>
                <br/>
                {this.props.img? <img alt={this.props.title} src={this.props.img} style={{"height": 'auto', "width": "80%"}} className="m-auto"/>: <YouTube videoId={this.props.url} opts={opts} onReady={this._onReady} />}
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.service}</p>
                    <p className="card-text"><strong>Tech Used: </strong>{this.props.tech}</p>
                    {this.props.website? <a href={this.props.website} className="btn btn-primary">Website</a>: null}
                    <a href={this.props.git} className="btn btn-secondary">Github</a>
                </div>
            </div>
        </div>
        )
    }
}

export default Project;