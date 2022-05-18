import axios from "axios";
import React, { useState, useEffect } from "react";
import './assets/css/projects.css';
import Project from "./components/Project"
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
    const [projects, setProjects] = useState(() => {
        return []
    });

    const [url, setUrl] = useState(() => {
        return "https://jordancortes-admin.herokuapp.com/api/projects/software"
    })


    useEffect(() => {
        console.log("rendered")
        axios.get(url).then(res => {
            setProjects(res.data);
        });

        // toggle all/starred projects
        const mgProjectsBtn = document.querySelector(".mgProjectsBtn");
        const swProjectsBtn = document.querySelector(".swProjectsBtn");

        // on btn click, hide opposite btn, set new URL
        mgProjectsBtn.addEventListener("click", () => {
            mgProjectsBtn.style.display = "none";
            swProjectsBtn.style.display = "block";
            setUrl("https://jordancortes-admin.herokuapp.com/api/projects/motion");
        })
        swProjectsBtn.addEventListener("click", () => {
            swProjectsBtn.style.display = "none";
            mgProjectsBtn.style.display = "block";
            setUrl("https://jordancortes-admin.herokuapp.com/api/projects/software");
        })

    }, [url])

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
                    <button className="mgProjectsBtn"><BsFillGrid1X2Fill /> Ver proyectos de Motion</button>
                    <button className="swProjectsBtn"><BsFillGrid1X2Fill /> Ver proyectos de Software</button>
                </div>
                
                <AnimatePresence>
                    <motion.div
                        key={url}
                        className="project-list"
                    >
                        {projectElements}
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    )
}