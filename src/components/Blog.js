import React, { Component } from 'react';

class Blog extends Component {
    render() {
        return (
            <div className='blog container mt-3 p-3'>
                <div>
                    <h1>Medium Blog:</h1>
                    <hr />
                    <h4 >
                        <div className= "row justify-content-md-center">
                            <div className="col-lg-2">
                                <a rel="noopener" href="https://medium.com/@sarakhandaker">
                                    <img alt="@SaraKhandaker" src="https://miro.medium.com/fit/c/80/80/0*0GH8KRyETyRrZZk9" width="80" height="80" />
                                </a>
                            </div>
                            <div className="col-lg-2 my-auto">
                                <a rel="noopener" href="https://medium.com/@sarakhandaker">
                                    <span>@sarakhandaker</span>
                                </a>
                            </div>
                        </div>
                    </h4>
                    <hr />
                </div>
                <h5>Lastest Blog Articles:</h5>
                <hr />
                <div className='blog-content' >
                    <div class="medium-widget__wrapper">
                        <div class="medium-widget-article__row">
                            <div class="medium-widget-article__item">
                                <div class="medium-widget-article__grid">
                                    <div class="medium-widget-article__content">
                                        <a href="https://medium.com/p/1810cdc61d8d" target="_blank" class="medium-widget-article__title">Waiting to Work</a>
                                        <div class="medium-widget-article__description">What to do while waiting for your EAD card </div>
                                        <div class="medium-widget-article__description">Oct 16, 2020</div>
                                    </div>
                                </div>
                            </div><div class="medium-widget-article__item">
                                <div class="medium-widget-article__grid">
                                    <div class="medium-widget-article__content">
                                        <a href="https://medium.com/p/4abf97a7f6da" target="_blank" class="medium-widget-article__title">Fake It Till You Make It!</a>
                                        <div class="medium-widget-article__description">Imposter Syndrome</div>
                                        <div class="medium-widget-article__description">Oct 7, 2020</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="medium-widget-article__row">
                            <div class="medium-widget-article__item">
                                <div class="medium-widget-article__grid">
                                    <div class="medium-widget-article__content">
                                        <a href="https://medium.com/p/b689d7f7bfbd" target="_blank" class="medium-widget-article__title">Inheritance&nbsp;!= Interface</a>
                                        <div class="medium-widget-article__description">Why Interfaces are not Multiple Inheritances</div>
                                        <div class="medium-widget-article__description">Sep 29, 2020</div>
                                    </div>
                                </div>
                            </div>
                            <div class="medium-widget-article__item">
                                <div class="medium-widget-article__grid">
                                    <div class="medium-widget-article__content">
                                        <a href="https://medium.com/p/cccbdcd8374c" target="_blank" class="medium-widget-article__title">How Long Should Functions Be? How Do We Measure It?</a>
                                        <div class="medium-widget-article__description">Is there a max number of lines for functions?</div>
                                        <div class="medium-widget-article__description">Aug 17, 2020</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;