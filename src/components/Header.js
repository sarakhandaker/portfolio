
import React, { Component } from 'react';


class Header extends Component {
    state = {}

    render() {
        return (<div className="arrow-right">
            <header>
            <img src="https://avatars3.githubusercontent.com/u/60558804?s=460&u=0282bcd2024786e7e00f2ae659c724c9b14524ce&v=4" className="img-circle" alt='about'></img>
                <h1>Sara Khandaker</h1>
            </header>
            <p className='header-title'>
            Full Stack Software Developer<br></br>
            Innovating Solutions for Urban Environments
               <br></br>
                </p>
        </div>);
    }
}

export default Header;