import axios from "axios";
import { useState, useEffect } from "react";
import './projects.css';
import Project from "./Project/Project"
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { motion } from "framer-motion";

const projectsTitle = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: .8,
            duration: 1,
        }
    }
}

export default function Projects() {
    const [loading, setLoading] = useState(() => {
        return true
    })
    const [projects, setProjects] = useState(() => {
        return []
    });

    useEffect(() => {
        axios.get("https://jordancortes-admin.herokuapp.com/api/projects/starred").then(res => {
            setProjects(res.data);
            setLoading(false);
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
                <motion.h2
                    variants={projectsTitle}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Proyectos destacados
                </motion.h2>

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