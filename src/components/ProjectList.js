import React, { useState, useEffect } from "react";
import Project from "./Project";

export default function ProjectList() {

    const [projects, setProjects] = useState([]);
    const url = "https://jordan-cortes-admin.herokuapp.com/api/v1/projects"

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setProjects(responseJSON)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    const projectElements = projects.map(n => {
        return <Project key={n.id}
            imageUrl={n.imageUrl}
            name={n.name}
            about={n.about}
            url={n.url}
        />
    }
    );

    return (
        <div className="container pt-5 project-list" id="projects">
            <h2 className="pb-4 pt-5 title">Proyectos</h2>

            <div className="row">
                {projectElements}
            </div>
        </div>
    )
}