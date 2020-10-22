import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='about'>
                <div className='about-content mt-3 p-3 container'>
                    <h1>About Me:</h1>
                    <hr/>
                    <div className="row">
                        <div className="col">
                            <br/>
                            <br/>
                            <p>Hello! I'm Sara, a software engineer based in Seattle, WA.</p>
                            <p> I have a background in Civil/ Geotechnical Engineering and I enjoy creating things that help people interact with the city or spaces they live in.</p>
                            <p> My goal is to use my knowledge of civil engineering to innovate software solutions for the urban environments of tomorrow.</p>
                            <p> I recently graduated from Flatiron School's Software Engineering Immersive Program.</p>
                        </div>
                        <div className="col">
                            <p>Here are some technologies I have been working with:</p>
                            <ul class="skills-list">
                                <li>JavaScript</li>
                                <li>Ruby</li>
                                <li>C#</li>
                                <li>SQL</li>
                                <li>HTML &amp;CSS</li>
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
        );
    }
}

export default About;