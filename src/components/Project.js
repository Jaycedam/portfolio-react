import React from "react";
import { FaGithub } from "react-icons/fa"

export default function Project(props) {
    return (
        <div className="project">
            <div className="image">
                <img src={props.imageUrl} alt="Project" />
            </div>

            <div className="text">
                <h3>{props.name}</h3>
                <p>{props.about}</p>
            </div>

            <div className="link">
                <a href={props.url} className="btn-color">
                    GitHub <FaGithub/>
                </a>
            </div>
        </div>
    )
}