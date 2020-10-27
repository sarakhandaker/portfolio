import React, { Component } from 'react';
import Project from './SingleProject';
import kcapp from './KC_app.png'

const projects = [
    {
        id: 1,
        title: 'Seattle Parks App',
        service: 'Application that allows users to explore, discover and rate the many parks in the Seattle area',
        url: 'Hw1bejO-QSQ',
        website: "https://cpark-app.herokuapp.com",
        git: "https://github.com/sarakhandaker/seattle-parks-react",
        tech: "Ruby on Rails, GeoCoder, PostgreSQL, React, Redux, Google Maps API, Bootstrap, Heroku"
    },
    {
        id: 2,
        title: 'TV Binge App',
        service: 'A TV Show tracking tool that allows users to manage the shows and episodes they are currently watching',
        url: 'APDFt2DpePc',
        website: "https://sarakhandaker.github.io/bingeapp/",
        git: "https://github.com/sarakhandaker/bingeapp",
        tech: "Ruby on Rails, TV Maze API, Javascript, PostgreSQL, Bootstrap, HTML/CSS"
    },
    {
        id: 3,
        title: 'PairUp!',
        service: 'A matching pairs memory game app that improves user memory and cognitive functions',
        url: 'ESqVLdMqoPE',
        git: "https://github.com/sarakhandaker/PairUp",
        tech: "Ruby on Rails, PostgreSQL, React, Chart.js, JWT auth, Bootstrap"
    },
    {
        id: 4,
        title: 'OutofStock',
        service: 'App keeps track of stock at grocery stores by allowing users to report missing items on thier visits.',
        url: '5L9V4VFsdFs',
        git: "https://github.com/sarakhandaker/grocery_tracker_seattle",
        tech: "Ruby on Rails, SQLite, Geocoder, Bootstrap, HTML/CSS"
    },
    {
        id: 5,
        title: 'King County Metro CLI App',
        service: 'CLI app allows users to find the nearest KC Metro bus stop to any address and manage these stops and their commutes',
        url: '9jvFevyB9rw',
        git: "https://github.com/sarakhandaker/CLI_Transit_App_Ruby",
        tech: "Ruby, GeoCoder, GTFS data, SQLite"
    },
    {
        id: 6,
        title: 'King County Metro Web App',
        service: 'App allows users to find the nearest KC Metro bus stop to any address and manage these stops and their commutes',
        img: kcapp,
        git: "https://github.com/sarakhandaker/ASPNET-React-TransitApp",
        tech: "ASP.NET, SQLite, React, Leaflet, GTFS data, Bootstrap"
    }
]


class Projects extends Component {

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
                    <div className="col-lg-4 mb-4">
                        <div className="card cardprojectlist p-3">
                            <ul className="list-group list-group-flush text-left">
                                {projects.map((project) => (
                                    <li key={project.id}
                                        className="list-group-item"
                                        style={{ "color": "black", "cursor":"pointer" }}
                                        onClick={()=>this.setProject(project.id)}
                                       id= {selectedProject.id=== project.id? "selected" :""}>
                                        {selectedProject.id=== project.id? <span style={{"color": "#B7B6C2"}}><i className="fa fa-play mr-3"></i><strong >{project.title}</strong></span>:project.title }
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
                        img= {selectedProject.img}
                        tech={selectedProject.tech}
                    ></Project>
                </div>
            </div>
        </div>);
    }
}

export default Projects;