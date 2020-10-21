import React, { Component } from 'react';

const social= [
    {   name:'Github',
        url:'https://github.com/chetanverma16'},
    {
        name: 'Linkedin',
        url: 'https://www.behance.net/chetanverma'
    }
]

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1> Contact </h1>
        <div className='contact-content'>
                <h1>
                Let’s create your next<br></br>
                <span className='amazing-color'>experience together</span></h1>
                    <a href={`mailto:kttsara@gmil.com`} className='email'>kttsara@gmail.com</a>
                <ul>
                    {social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
        </div>
        </div>);
    }
}
 
export default Contact;