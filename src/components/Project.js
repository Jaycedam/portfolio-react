import React from "react";

export default function Project(props) {
    return (
            <div className="col-12 col-md-6 col-lg-4 project-container">
                <div className="row ">
                    <div className="col-12 image">
                        <img src={props.imageUrl} alt="Project" />
                    </div>
                    <div className="col-12 content px-3">
                        <h4>{props.name}</h4>
                        <p>{props.about}</p>
                        <a href={props.url} className="btn btn-outline-dark">
                            Link proyecto
                        </a>
                    </div>
                </div>
            </div >
    )
}