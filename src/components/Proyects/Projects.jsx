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

        // on btn click, hide opposite btn, set new URL
        moreProjectsBtn.addEventListener("click", () => {
            moreProjectsBtn.style.display = "none";
            lessProjectsBtn.style.display = "block";
            setUrl("https://jordancortes-admin.herokuapp.com/api/projects");
        })
        lessProjectsBtn.addEventListener("click", () => {
            lessProjectsBtn.style.display = "none";
            moreProjectsBtn.style.display = "block";
            setUrl("https://jordancortes-admin.herokuapp.com/api/projects/starred");
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
                    <h2>Proyectos</h2>
                    <button className="moreProjectsBtn"><BsFillGrid1X2Fill /> Ver más</button>
                    <button className="lessProjectsBtn"><BsFillGrid1X2Fill /> Ver destacados</button>
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