import React from "react";

export default function Project(props) {
    return (
        <div className="feature col">
            <h2>{props.name}</h2>
            <p>{props.about}</p>
            <a href={props.url} className="icon-link">
                Link
            </a>
        </div>
    )
}