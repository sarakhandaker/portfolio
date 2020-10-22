import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='about mt-3 mb-3'>
                <h1>About Me:</h1>
                <hr />
                <div class="col-sm-12 text-center">
                    <img alt="React" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" class="techlogo" width="150" />
                    <img style={{ "marginRight": "30px" }} alt="Bootstrap" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" class="techlogo" width="80" />
                    <img alt="PostgreSQL" src="//upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/220px-Postgresql_elephant.svg.png" class="techlogo" width="80" />
                    <img alt="Postman" src="https://img.pngio.com/git-logo-png-5-png-image-git-png-180_180.png" class="techlogo" width="100" />
                </div>
                <div className='about-content mt-3 p-3 container'>
                    <div className="row">
                        <div class="col medium-widget-article__description" style={{ "color": "black", "fontSize": "20px" }}>
                            <strong>Hello!</strong> <br /><br />
                            I'm Sara, a full stack software engineer based in Seattle, WA.<br /><br />
                             I have a background in Civil/ Geotechnical Engineering and I enjoy creating things that help people interact with the city or spaces they live in.<br />
                             My goal is to use my strong technical expertise to innovate software solutions for the urban environments of tomorrow.<br />
                             I am passionate about sustainable environmentally friendly design with a keen insterest in public transit.<br /><br />
                             I recently graduated from Flatiron School's Software Engineering Immersive Program.<br />
                        </div>
                        <div class="col medium-widget-article__description" style={{ "color": "black", "fontSize": "20px" }}>
                            <p><strong>Technologies I have been working with:</strong></p>
                            <ul class="skills-list" style={{ "listStyle": "none" }}>
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
                <div class="col-sm-12 text-center m-3">
                    <img alt="ASP.NET" src="https://static.gunnarpeipman.com/wp-content/uploads/2020/09/aspnet-featured.png" class="techlogo" width="150" />
                    <img alt="Heroku" style={{ "marginRight": "30px" }} src="https://cdn.worldvectorlogo.com/logos/heroku.svg" class="techlogo" width="60" />
                    <img alt="Ruby on Rails" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png" class="techlogo" width="150" />
                    <img alt="Github" src="https://396241.smushcdn.com/1598754/wp-content/uploads/2020/03/postman-logo-vert-2018.jpg?lossy=1&strip=1&webp=1" class="techlogo" width="140" />
                </div>

            </div>
        );
    }
}

export default About;