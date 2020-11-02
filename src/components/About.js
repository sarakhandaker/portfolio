import React, { Component } from 'react';
import techlogo from './techlogos.png'

class About extends Component {
    render() {
        return (
            <div className='about mt-3 mb-3'>
                <h1>About Me:</h1>
                <hr />
                <div className='about-content mt-3 p-3 container'>
                    <div className="row">
                        <div className="col-lg-8 mb-3" style={{ "color": "black", "fontSize": "20px" }}>
                            <strong>Hello!</strong> <br /><br />
                            <img alt="techlogos" src={techlogo} className="techlogo" width="470"/>
                            <br /><br />
                            I'm Sara, a full stack software engineer based in Seattle, WA.<br /><br />
                             I have a background in Civil/ Geotechnical Engineering and I enjoy helping people interact with the city/ spaces they live in.<br /><br />
                             I have experience on large engineering projects focused on clients' needs to deliver quality products. My range of international work experience in Germany, Canada, Tunisia, and the USA offers me a unique and global perspective.<br /><br />
                             My goal is to use my strong technical expertise to innovate software solutions for the smart urban environments of tomorrow.
                             I am passionate about sustainable, environmental design with a keen insterest in public transit.<br /><br />
                             I recently graduated from Flatiron School's Software Engineering Program.<br /><br />
                             <a className="btn btn-secondary" href="https://gist.github.com/sarakhandaker/23951838952ece007e6d94b9d21d919e">See My Resume</a>
                        </div>
                        <div className="col-lg-4" style={{ "color": "black", "fontSize": "20px" }}>
                            <div className="list-type4">
                                <ul className="skills-list" style={{ "listStyle": "none" }}>
                                    <li>JavaScript</li>
                                    <li>Ruby</li>
                                    <li>C#</li>
                                    <li>SQL</li>
                                    <li>HTML &amp; CSS</li>
                                    <li>Bootstrap</li>
                                    <li>Ruby on Rails</li>
                                    <li>React</li>
                                    <li>ASP.NET</li>
                                    <li>Git</li>
                                    <li>Postman</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;