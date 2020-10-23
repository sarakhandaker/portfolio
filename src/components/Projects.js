import React, { Component } from 'react';
import Project from './SingleProject';

const projects = [
    {
        id: 1,
        title: 'Seattle Parks App',
        service: 'Application that allows users to explore, discover and rate the many parks in the Seattle area',
        url: 'Hw1bejO-QSQ',
        website: "https://cpark-app.herokuapp.com",
        git: "https://github.com/sarakhandaker/seattle-parks-react"
    },
    {
        id: 2,
        title: 'TV Binge App',
        service: 'A TV Show tracking tool that allows users to manage the shows and episodes they are currently watching',
        url: 'APDFt2DpePc',
        website: "https://sarakhandaker.github.io/bingeapp/",
        git: "https://github.com/sarakhandaker/bingeapp"
    },
    {
        id: 3,
        title: 'PairUp!',
        service: 'A matching pairs memory game app that improves user memory and cognitive functions',
        url: 'ESqVLdMqoPE',
        git: "https://github.com/sarakhandaker/PairUp"
    },
    {
        id: 4,
        title: 'OutofStock',
        service: 'App keeps track of stock at grocery stores by allowing users to report missing items on thier visits.',
        url: '5L9V4VFsdFs',
        git: "https://github.com/sarakhandaker/grocery_tracker_seattle"
    },
    {
        id: 5,
        title: 'King County Metro App',
        service: 'CLI app allows users to find the nearest KC Metro bus stop to any address and manage these stops and their commutes',
        url: '9jvFevyB9rw',
        git: "https://github.com/sarakhandaker/CLI_Transit_App_Ruby"
    }
]


class Work extends Component {

    state = {
        project_id: 1
    }

    setProject = (id) => {
        this.setState({ project_id: id })
    }

    render() {
        const selectedProject = projects.find(project => project.id === this.state.project_id)
        return (<div className="mt-5 p-4 project-div ">
            <h1>Projects</h1>
            <hr />
            <div className="container mb-4 pb-4">
                <div className='work-content row card-deck'>
                    <div class="col-sm-6">
                        <div class="card cardproject p-3">
                            <h4>List of Projects</h4>
                            <ul class="list-group list-group-flush text-left">
                                {projects.map((project) => (
                                    <li
                                        key={project.id}
                                        className="list-group-item"
                                        style={{ "color": "black", "cursor":"pointer" }}
                                        onClick={()=>this.setProject(project.id)}
                                       id= {selectedProject.id=== project.id? "selected" :""}
                                    >
                                        {selectedProject.id=== project.id? <strong style={{"color": "#B7B6C2"}}>{project.title}</strong>:project.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Project key={selectedProject.id}
                        title={selectedProject.title}
                        service={selectedProject.service}
                        website={selectedProject.website}
                        url={selectedProject.url}
                        git={selectedProject.git}
                    ></Project>
                </div>
            </div>
        </div>);
    }
}

export default Work;