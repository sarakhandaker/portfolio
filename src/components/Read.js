import React, { Component } from "react";


export class Read extends Component {
    state = {
    };

    componentDidMount() {
    }

    render() {
        return (
            <div className='read container mt-3 p-3'>
                <h1>Bookshelf</h1>
                <hr />
                <div className="container mb-4 pb-4">
                    <h2>Currently Reading</h2>
                    <div class="row mt-3 p-3">
                        <div class="col-sm">
                        <img alt="The Atlas of Unusual Borders: Discover Intriguing Boundaries, Territories and Geographical Curiosities" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565781146l/45169008._SX200_.jpg" />
                        </div>
                        <div class="col-sm m-auto pt-3">
                            <h4>The Atlas of Unusual Borders: Discover Intriguing Boundaries, Territories and Geographical Curiosities </h4>
                            by <a rel="nofollow" href="https://www.goodreads.com/author/show/6907449.Zoran_Nikoli_">Zoran Nikolić</a>
                        </div>
                    </div>
                    <h2>Recently Read</h2>
                    <div class="row mt-3 p-3">
                        <div class="col-sm pb-5">
                            <div class="pb-3">
                                <img alt="Range: Why Generalists Triumph in a Specialized World" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550048292l/41795733._SX100_.jpg" />
                            </div>
                            <div class="font-weight-bold">
                                Range: Why Generalists Triumph in a Specialized World
                            </div>
                            <div class="gr_custom_author_1613588504">
                                by <a rel="nofollow" href="https://www.goodreads.com/author/show/7164089.David_Epstein">David Epstein</a>
                            </div>
                        </div>
                        <div class="col-sm pb-5">
                            <div class="pb-3">
                                <img alt="Gut: The Inside Story of Our Body’s Most Underrated Organ" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1435168687l/23013953._SY150_.jpg" />
                            </div>
                            <div class="font-weight-bold">
                                Gut: The Inside Story of Our Body’s Most Underrated Organ
                            </div>
                            <div class="gr_custom_author_1613588504">
                                by <a rel="nofollow" href="https://www.goodreads.com/author/show/7831553.Giulia_Enders">Giulia Enders</a>
                            </div>
                        </div>
                        <div class="col-sm pb-5">
                            <div class="pb-3">
                                <img alt="The Atlas of Disease: Mapping Deadly Epidemics and Contagion from the Plague to the Zika Virus" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1534533036l/38509772._SX105_.jpg" />
                            </div>
                            <div class="font-weight-bold">
                                The Atlas of Disease: Mapping Deadly Epidemics and Contagion from the Plague to the Zika Virus
                            </div>
                            <div class="gr_custom_author_1613588504">
                                by <a rel="nofollow" href="https://www.goodreads.com/author/show/40102.Sandra_Hempel">Sandra Hempel</a>
                            </div>
                        </div>
                        {/* <div class="col-sm pb-5">
                            <div class="pb-3">
                                <img alt="Farsighted: How We Make the Decisions That Matter the Most" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1523886240l/38769051._SY150
                                _.jpg" />
                            </div>
                            <div class="font-weight-bold">
                                Farsighted: How We Make the Decisions That Matter the Most
                            </div>
                            <div class="gr_custom_author_1613588504">
                                by <a rel="nofollow" href="https://www.goodreads.com/author/show/1563.Steven_Johnson">Steven Johnson</a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Read;