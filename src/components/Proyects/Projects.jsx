import axios from "../../api/axios";
import { useState, useEffect } from "react";
import "./projects.css";
import Project from "./Project/Project";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { motion } from "framer-motion";

const projectsTitle = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const PROJECTS_URL = "/projects/";

export default function Projects() {
  const [loading, setLoading] = useState(() => {
    return true;
  });
  const [projects, setProjects] = useState(() => {
    return [];
  });

  useEffect(() => {
    axios.get(PROJECTS_URL).then((res) => {
      setProjects(res.data);
      setLoading(false);
    });
  }, []);

  const projectElements = projects.map((n) => {
    return <Project key={n.id} image_url={n.image_url} {...n} />;
  });

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          className="text"
          variants={projectsTitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Proyectos destacados</h2>
          <p>Click en imagen para más detalles</p>
        </motion.div>

        {loading ? (
          <LoadingAnimation />
        ) : (
          <div className="project-list">{projectElements}</div>
        )}
      </div>
    </section>
  );
}
