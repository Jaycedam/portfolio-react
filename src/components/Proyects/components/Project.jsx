import React from "react";
import "./assets/css/project.css"
import Button from "../../Button/Button";

export default function Project(props) {
    return (
        <div className="project">
            <div className="image">
                <img src={props.imageUrl} alt="Project" />
            </div>

            <div className="text">
                <h3>{props.name}</h3>
                <p>{props.about}</p>
                <Button
                    text="Link"
                    type="btn"
                    link={props.url} 
                />
            </div>
        </div>
    )
}