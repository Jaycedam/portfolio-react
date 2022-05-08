import React, { useState, useEffect } from "react";
import './assets/css/projects.css';
// import Button from "../Button/Button";
// import { FaGithub } from "react-icons/fa"
import Project from "./components/Project"

export default function Projects() {

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