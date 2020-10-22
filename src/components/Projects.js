import React, { Component } from 'react';
import Project from './SingleProject';

const projects = [
    {
     id: 1,
     title:'Seattle Parks App',
      service:'Application that allows users to explore, discover and rate the many parks in the Seattle area',
      url:'Hw1bejO-QSQ',
      website: "https://cpark-app.herokuapp.com",
      git:"https://github.com/sarakhandaker/seattle-parks-react"
     },
     {
         id: 2,
         title: 'TV Binge App',
         service: 'A TV Show tracking tool that allows users to manage the shows and episodes they are currently watching',
         url: 'APDFt2DpePc',
         website: "https://sarakhandaker.github.io/bingeapp/",
         git:"https://github.com/sarakhandaker/bingeapp"
     },
     { 
         id: 3,
         title: 'PairUp!',
         service: 'A matching pairs memory game app that improves user memory and cognitive functions',
         url: 'ESqVLdMqoPE',
         git:"https://github.com/sarakhandaker/PairUp"
     },
     {
         id: 4,
         title: 'OutofStock',
         service: 'App that keeps track of missing items at grocery stores by allowing users to report missing items on thier visits to the grocery store.',
         url: '5L9V4VFsdFs',
         git:"https://github.com/sarakhandaker/grocery_tracker_seattle"
    },
    {
        id: 5,
        title: 'King County Metro App',
        service: 'CLI app allows users to find the nearest KC Metro bus stop to any address and manage these stops and their commutes',
        url: '9jvFevyB9rw',
        git:"https://github.com/sarakhandaker/CLI_Transit_App_Ruby"
   }
]


class Work extends Component {
    
    state = {  }
    render() { 
        return (<div className= "mt-3 p-3 project-div ">
        <h1 className='heading'>Projects</h1>
        <hr/>
        <div className= "container">
        <div className='work-content row '>
                {projects.map((project)=>(
                    <Project key={project.id}
                             title = {project.title}
                             service = {project.service}
                             website = {project.website}
                             url={project.url}
                             git={project.git}
                     ></Project>
                ))}
        </div>
        </div>
        </div>  );
    }
}
 
export default Work;