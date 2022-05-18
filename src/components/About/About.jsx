import React from "react";
import laptop from "./assets/images/laptop.jpg"
import './assets/css/about.css';
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import {GrDocumentText} from "react-icons/gr";

// animation for project (framer motion)
const about = {
    hidden: {
        y: 30,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: .3,
            duration: .8,
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
                <div className="image">
                    <img src={laptop} alt="about" />
                </div>

                <div className="text">
                    <h2>Acerca de mí</h2>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>

                    <br />

                    <div className="call-to-action">
                        <Button
                            text="Contactar"
                            link="mailto:jaycedam@gmail.com"
                            type="btn-color"
                            icon={<MdEmail />}
                        />

                        <Button
                            text="CV"
                            link="https://drive.google.com/file/d/1eo-acjbs20EX7KdWSa3KiDFfZ5n4tlF7/view?usp=sharing"
                            type="btn"
                            icon={<GrDocumentText />}
                        />
                    </div>
                </div>
            </motion.div>

        </section>
    )
}