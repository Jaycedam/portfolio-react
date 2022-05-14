import axios from "axios";
import React, { useState, useEffect } from "react";
import './assets/css/projects.css';
import Project from "./components/Project"

export default function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("https://jordancortes-admin.herokuapp.com/api/projects/starred").then(res => {
            setProjects(res.data);
        });

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