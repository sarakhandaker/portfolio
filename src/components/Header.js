
import React, { Component } from 'react';


class Header extends Component {
    state = {}

    render() {
        return (<div>
        <h1 className='heading-background'>CREATIVE</h1>
            <header>
                <h1>Sara Khandaker</h1>
            </header>
            <p className='header-title'>
            Junior Software Developer<br></br>Former Civil Engineer<br></br>
            Passion For Innovating Solutions for Urban Environments
               <br></br>
                    <button><a href={`mailto:kttsara@gmail.com`} rel="noopener noreferrer" >Contact</a></button>
                </p>
        </div>);
    }
}

export default Header;