import React, { useState, useEffect } from "react";
import './assets/css/projects.css';
import Project from "./components/Project"

export default function Projects() {

    const [projects, setProjects] = useState([]);
    const url = "https://jordancortes-admin.herokuapp.com/api/projects/starred"

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
            technology={n.technology}
            about={n.about}
            url={n.url}
        />
        }
    );


    return (
        <section id="projects" className="projects-section">

            <div className="container">
                <h2>Proyectos destacados</h2>

                <div className="project-list">
                    {projectElements}
                </div>
            </div>
        </section>
    )
}