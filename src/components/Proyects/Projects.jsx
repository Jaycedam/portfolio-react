import axios from "axios";
import React, { useState, useEffect } from "react";
import './assets/css/projects.css';
import Project from "./components/Project"
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import {FiGithub} from "react-icons/fi";

export default function Projects() {
    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState(() => {
        return []
    });

    useEffect(() => {
        axios.get("https://jordancortes-admin.herokuapp.com/api/projects/starred").then(res => {
            setProjects(res.data);
            setLoading(false)
        });

    }, [])

    const projectElements = projects.map(n => {
        return <Project
            key={n.id}
            imageUrl={n.imageUrl}
            name={n.name}
            area={n.area.name}
            technology={n.technology}
            about={n.about}
            url={n.url}
        />
    });

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="title">
                    <h2>Proyectos destacados</h2>
                    <a href="https://github.com/Jaycedam">
                        <FiGithub /> GitHub
                    </a>
                </div>

                {
                    loading ? <LoadingIcon /> :
                            <div className="project-list">
                                {projectElements}
                            </div>
                }
            </div>
        </section>
    )
}