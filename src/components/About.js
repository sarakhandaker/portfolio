import React, { Component } from 'react';

class About extends Component {
    render() { 
        return (
        <div className='about'>
            <div className='about-content'>
            <h1>About</h1>
            <p>Something About Me</p>
            </div>
            <img src="https://avatars3.githubusercontent.com/u/60558804?s=460&u=0282bcd2024786e7e00f2ae659c724c9b14524ce&v=4" alt='about'></img>
        </div>  
        );
    }
}
 
export default About;