import React from "react";
import code from "../images/code.svg"

export default function Project(props) {
    return (
        <div className="col-12 col-lg-6 project-container">
            <div className="row px-4 py-4">
                <div className="col-3 image">
                    <img src={code} alt="project" />
                </div>
                <div className="col-9 content">
                    <h4>{props.name}</h4>
                    <p>{props.about}</p>
                    <a href={props.url} className="project-link">
                        Link
                    </a>
                </div>
            </div>

        </div>
    )
}