import React, { useState, useEffect } from "react";
import Project from "./Project"

export default function ProjectList() {

    const [projects, setProjects] = useState([]);
    const url = "https://jordan-cortes-admin.herokuapp.com/api/v1/projects"

    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setProjects(responseJSON)
        console.log(response.status)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    const projectElements = projects.map(n => {
        return <Project key={n.id}
            name={n.name}
            about={n.about}
            url={n.url}
        />
    }
    );

    return (
        <div className="container px-4 py-5" id="projects">
            <h2 className="pb-2 border-bottom">Proyectos</h2>

            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                {projectElements}
            </div>
        </div>
    )
}