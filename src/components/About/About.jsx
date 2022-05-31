import "./about.css";
import { FaPython, FaJava, FaReact, FaBootstrap } from "react-icons/fa";
import { SiCsharp, SiOracle, SiPostgresql, SiDjango, SiSpring } from "react-icons/si";
import Button from "../Button/Button";
import { HiDocumentText } from "react-icons/hi";
import { motion } from "framer-motion";

// animation for framer motion
const about = {
    hidden: {
        y: 50,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: .5,
            duration: 1,
            ease: "easeInOut"
        }
    }
}

export default function About() {
    return (
        <section id="about" className="about-section">
            <motion.div
                variants={about}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                className="container"
            >

                <div className="text">
                    <h2>Acerca de mí</h2>
                    <p>
                        Jordan Cortés, 1995.
                        Analista Programador Computacional (Duoc UC 2021).
                        Previamente Comunicador Audiovisual Digital (Santo Tomás 2015),
                        especializado en Motion Graphics,
                        proyectos relacionados pueden ser vistos en <a href="https://www.behance.net/jaycedam">Behance</a>.
                        <br /><br />
                        Actualmente enfocado en programación y nuevas tecnologías.
                    </p>

                    <Button
                        text="CV"
                        icon={<HiDocumentText />}
                        type="btn"
                        link="https://drive.google.com/file/d/1VjSfWn0HnkU4L5RkofvKKXUNrxxri1hI/view?usp=sharing"
                    />
                </div>

                <div className="technologies">
                    <div className="icons">
                        <div className="element">
                            <FaPython />
                            <p>Python</p>
                        </div>

                        <div className="element">
                            <FaJava />
                            <p>Java</p>
                        </div>

                        <div className="element">
                            <SiCsharp />
                            <p>C#</p>
                        </div>

                        <div className="element">
                            <SiOracle />
                            <p>Oracle SQL</p>
                        </div>

                        <div className="element">
                            <SiPostgresql />
                            <p>PostgreSQL</p>
                        </div>

                        <div className="element">
                            <FaReact />
                            <p>React</p>
                        </div>

                        <div className="element">
                            <SiDjango />
                            <p>Django</p>
                        </div>

                        <div className="element">
                            <SiSpring />
                            <p>Spring Boot</p>
                        </div>

                        <div className="element">
                            <FaBootstrap />
                            <p>Bootstrap</p>
                        </div>

                    </div>
                </div>

            </motion.div>
        </section>
    )
}