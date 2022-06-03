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
            duration: .8,
            ease: "easeOut"
        }
    }
}

const icon = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 1,
            ease: "easeOut"
        }
    }
}

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">

                <motion.div
                    variants={about}
                    viewport={{ once: true }}
                    initial="hidden"
                    whileInView="visible"
                    className="text"
                >
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
                </motion.div>

                <div className="technologies">
                    <div className="icons">
                        <motion.div
                            variants={icon}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="element">
                            <FaPython />
                            <p>Python</p>
                        </motion.div>

                        <motion.div
                            variants={icon}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="element">
                            <FaJava />
                            <p>Java</p>
                        </motion.div>

                        <motion.div
                            variants={icon}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="element">
                            <SiCsharp />
                            <p>C#</p>
                        </motion.div>

                        <motion.div
                            variants={icon}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="element">
                            <SiOracle />
                            <p>Oracle SQL</p>
                        </motion.div>

                        <motion.div
                            variants={icon}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="element">
                            <SiPostgresql />
                            <p>PostgreSQL</p>
                        </motion.div>

                        <motion.div
                            variants={icon}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="element">
                            <FaReact />
                            <p>React</p>
                        </motion.div>

                        <motion.div
                            variants={icon}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="element">
                            <SiDjango />
                            <p>Django</p>
                        </motion.div>

                        <motion.div
                            variants={icon}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="element">
                            <SiSpring />
                            <p>Spring Boot</p>
                        </motion.div>

                        <motion.div
                            variants={icon}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="element">
                            <FaBootstrap />
                            <p>Bootstrap</p>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    )
}