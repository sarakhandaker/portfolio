import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
class Navbar extends Component {
    state = {}
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light main-navigation fixed-top mb-2">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mb-2" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto nav-list">
                        <li className="nav-list-item"><Link className='link nav-item nav-link' activeClass="active" to="home" spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={this.scrollToTop}
                        >Home</Link></li>
                        <li className="nav-list-item"><Link
                            className='link nav-item nav-link'
                            to="About"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >About</Link></li>
                        <li className="nav-list-item"><Link
                            className='link nav-item nav-link'
                            to="Projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Projects</Link></li>
                        <li className="nav-list-item"><Link
                            className='link nav-item nav-link'
                            to="Blog"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Blog</Link></li>
                    </ul>
                </div>
                <div>
                    <div className="contact">
                        <span style={{ "marginRight": "10px" }}> Contact: </span>
                        <a href={`mailto:kttsara@gmail.com`}><i className="fa fa-envelope" style={{"color": "#b4b5d1"}}></i></a>
                        <a href="https://www.linkedin.com/in/sara-khandaker/"><i className="fa fa-linkedin" style={{"color": "#b4b5d1"}}></i></a>
                        <a href="https://github.com/sarakhandaker"><i className="fa fa-github" style={{"color": "#b4b5d1"}}></i></a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;