import React, { Component } from 'react';
import Project from './SingleProject';

const projects = [
    {
     id: 1,//DO NOT CHANGE THIS (Please)😅
     title:'Project One', //Project Title - Add Your Project Title Here
      service:'UI/UX Design', // Add Your Service Type Here
     //Project Image - Add Your Project Image Here
      imageSrc:"https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      //Project URL - Add Your Project Url Here
      url:'http://chetanverma.com/'
     },
     {
         id: 2,//DO NOT CHANGE THIS (Please)😅
         title: 'Project Two',
         service: 'Website Development',
         imageSrc: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
         url: 'http://chetanverma.com/'
     },
     { 
         id: 3,//DO NOT CHANGE THIS (Please)😅
         title: 'Project Three',
         service: 'Web App',
         imageSrc: "https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
         url: 'http://chetanverma.com/'
     },
     {
         id: 4,//DO NOT CHANGE THIS (Please)😅
         title: 'Project Four',
         service: 'Branding',
         imageSrc: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
         url: 'http://chetanverma.com/'
    }
]


class Work extends Component {
    
    state = {  }
    render() { 
        return (<div>
        <h1 className='heading'>Projects</h1>
        <div className='work-content'>
                {projects.map((project)=>(
                    <Project key={project.id}
                             title = {project.title}
                             service = {project.service}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                     ></Project>
                ))}
        </div>
        </div>  );
    }
}
 
export default Work;