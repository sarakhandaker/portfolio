
import React, { Component } from 'react';
import Profile_Pic from './profile2.jpg'

class Header extends Component {
    state = {}

    render() {
        return (<div className="arrow-right">
            <header>
                <img src={Profile_Pic} className="imgcircle" alt='about'></img>
                <h1>Sara Khandaker</h1>
            </header>
            <p className='header-title'>
                Full Stack Software Developer<br></br>
                Innovating Solutions for Urban Environments<br></br>
            </p>
        </div>);
    }
}

export default Header;