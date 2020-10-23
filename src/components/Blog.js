import React, { Component } from "react";
import Axios from "axios";
import ShowBlog from "./ShowBlog";


export class Blog extends Component {
    state = {
        profile: {
            ptitle: "",
            name: "",
            avtar: "",
            profileurl: "",
        },
        item: []
    };

    componentDidMount() {
        Axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sarakhandaker")
            .then((data) => {
                const res = data.data.items
                this.setState((pre) => ({
                    profile: {
                        ...pre.profile,
                        ptitle: data.data.feed.title,
                        profileurl: data.data.feed.link,
                        avtar: data.data.feed.image,
                    },
                    item: res.filter(item => item.categories.length > 0)
                })
                );
            })
    }

    render() {
        return (
            <div className='blog container mt-3 p-3'>
                <div>
                    <h1>Medium Blog</h1>
                    <hr />
                    <h4 >
                        <div className="row justify-content-md-center">
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
                <div className="container">
                    <div className="row">
                        {this.state.item ? this.state.item.map((post, index) => (
                            <ShowBlog key={index} {...post} {...this.state.profile} {...index} />
                        )) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;