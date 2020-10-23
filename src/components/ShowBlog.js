import React from "react";
import c from "./ShowBlog.module.css";
import ToText from "./ToText";
import moment from "moment";

function ShowBlog(props) {
 
    return (
      <div className={`col-md-4 col-sm-6 col-xs-12 ${c.grid}`}>
        <div className={c.cardsmall}>
          <div
            className={c.cardpost__image}
            style={{ backgroundImage: `url(${props.thumbnail})` }}>
  
            <div className={c.authorimg}>
              <a href={props.profileurl}
                rel="noopener noreferrer"
                style={{ backgroundImage: `url(${props.avtar})` }}>
                Written By Sara Khandaker
              </a>
            </div>
          </div>
  
          <div className="card-body">
            <h5 className="card-title">
                <a href={props.title} className={c.textfiordblue}>{props.title}</a>
            </h5>
  
            <p className={c.cardText}>{`${ToText(
              props.description.substring(0, 400)
            )}...`}</p>
            <span className="text-muted">
              {moment(props.pubDate).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>
      </div>
    );
  }

  export default ShowBlog;