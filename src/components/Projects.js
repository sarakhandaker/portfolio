import React, { Component } from 'react';
import Project from './SingleProject';

const projects = [
    {
     id: 1,
     title:'Seattle Parks App', //Project Title - Add Your Project Title Here
      service:'UI/UX Design', // Add Your Service Type Here
     //Project Image - Add Your Project Image Here
      imageSrc:"https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      //Project URL - Add Your Project Url Here
      url:'Hw1bejO-QSQ'
     },
     {
         id: 2,
         title: 'TV Binge App',
         service: 'Website Development',
         imageSrc: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
         url: 'APDFt2DpePc'
     },
     { 
         id: 3,
         title: 'PairUp!',
         service: 'Web App',
         imageSrc: "https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
         url: 'ESqVLdMqoPE'
     },
     {
         id: 4,
         title: 'OutofStock',
         service: 'Branding',
         imageSrc: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
         url: '5L9V4VFsdFs'
    },
    {
        id: 5,
        title: 'King County Metro App',
        service: 'Branding',
        imageSrc: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        url: '9jvFevyB9rw'
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
                             imageSrc = {project.imageSrc}
                             url={project.url}
                     ></Project>
                ))}
        </div>
        </div>
        </div>  );
    }
}
 
export default Work;