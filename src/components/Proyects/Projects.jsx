import axios from "axios";
import React, { useState, useEffect } from "react";
import './assets/css/projects.css';
import Project from "./components/Project"
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";

export default function Projects() {
    const [projects, setProjects] = useState(() => {
        return []
    });

    const [url, setUrl] = useState(() => {
        return "https://jordancortes-admin.herokuapp.com/api/projects/starred"
    })


    useEffect(() => {
        console.log("rendered")
        axios.get(url).then(res => {
            setProjects(res.data);
        });

        // toggle all/starred projects
        const moreProjectsBtn = document.querySelector(".moreProjectsBtn");
        const lessProjectsBtn = document.querySelector(".lessProjectsBtn");
        const projectsGrid = document.querySelector(".project-list");

        // on btn click, add data, hide opposite btn, set new URL
        moreProjectsBtn.addEventListener("click", () => {
            projectsGrid.setAttribute("data-all-projects", "true");
            moreProjectsBtn.style.display = "none";
            lessProjectsBtn.style.display = "block";
            setUrl("https://jordancortes-admin.herokuapp.com/api/projects");
        })
        lessProjectsBtn.addEventListener("click", () => {
            projectsGrid.setAttribute("data-all-projects", "false");
            lessProjectsBtn.style.display = "none";
            moreProjectsBtn.style.display = "block";
            setUrl("https://jordancortes-admin.herokuapp.com/api/projects/starred");
        })

    }, [url])

    const projectElements = projects.map(n => {
        return <Project key={n.id}
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
                    <h2>Proyectos</h2>
                    <button className="moreProjectsBtn"><BsFillGrid1X2Fill /> Ver todos</button>
                    <button className="lessProjectsBtn"><BsFillGrid1X2Fill /> Ver destacados</button>
                </div>

                <div className="project-list" data-all-projects="false">
                    <AnimatePresence>
                        {projectElements}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}