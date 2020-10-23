import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
class Navbar extends Component {
    state = {}
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li className="nav-list-item"><Link className='link nav-item nav-link' activeClass="active" to="home" spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={this.scrollToTop}
                    >Home</Link></li>
                    <li className="nav-list-item"><Link
                        className='link nav-item nav-link'
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >About</Link></li>
                    <li className="nav-list-item"><Link
                        className='link nav-item nav-link'
                        activeClass="active"
                        to="Projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Projects</Link></li>
                    <li className="nav-list-item"><Link
                        className='link nav-item nav-link'
                        activeClass="active"
                        to="Blog"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Blog</Link></li>
                    </ul>
                    <li className="nav-list-item link nav-item nav-link">
                        <span className="ml-3"> Contact: </span>
                        <a href={`mailto:kttsara@gmail.com`}><i class="fa fa-envelope"></i></a>
                        <a href="https://www.linkedin.com/in/sara-khandaker/"><i class="fa fa-linkedin"></i></a>
                        <a href="https://github.com/sarakhandaker"><i class="fa fa-github"></i></a>
                    </li>
                </div>
            </nav>
                /* <nav className="main-navigation">
                <ul className="nav-list">
                    <li className="nav-list-item"><Link className='link nav-item nav-link' activeClass="active" to="home" spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={this.scrollToTop}
                    >Home</Link></li>
                    <li className="nav-list-item"><Link
                        className='link nav-item nav-link'
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >About</Link></li>
                    <li className="nav-list-item"><Link
                        className='link nav-item nav-link'
                        activeClass="active"
                        to="Projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Projects</Link></li>
                    <li className="nav-list-item"><Link
                        className='link nav-item nav-link'
                        activeClass="active"
                        to="Blog"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Blog</Link></li>
                    <li className="nav-list-item">
                        <span className="mr-3"> Contact: </span>
                        <a href={`mailto:kttsara@gmail.com`}><i class="fa fa-envelope"></i></a>
                        <a href="https://www.linkedin.com/in/sara-khandaker/"><i class="fa fa-linkedin"></i></a>
                        <a href="https://github.com/sarakhandaker"><i class="fa fa-github"></i></a>
                    </li>
                </ul>
            </nav> */
        );
    }
}

export default Navbar;