import React, { Component } from "react";


export class Read extends Component {
    state = {
    };

    componentDidMount() {
    }

    render() {
        return (
            <div className='read container'>
                <h1>Currently Reading</h1>
                <hr />
                <div className="container mb-4 pb-4">
                    <div class="row">
                        <div class="col">
                            <a title="Range: Why Generalists Triumph in a Specialized World" rel="nofollow" href="https://www.goodreads.com/review/show/3843813368?utm_medium=api&amp;utm_source=custom_widget"><img alt="Range: Why Generalists Triumph in a Specialized World" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550048292l/41795733._SX98_.jpg" /></a>
                        </div>
                        <div class="col">
                            <div class="gr_custom_title_1613587648">
                                <a rel="nofollow" href="https://www.goodreads.com/review/show/3843813368?utm_medium=api&amp;utm_source=custom_widget">Range: Why Generalists Triumph in a Specialized World</a>
                            </div>
                            <div class="gr_custom_author_1613587648">
                                by <a rel="nofollow" href="https://www.goodreads.com/author/show/7164089.David_Epstein">David   Epstein</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Read;