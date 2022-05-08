import React from "react";
import hero from './assets/images/laptop.svg';
import './assets/css/hero.css';
// import ArrowDown from "../ArrowDown/ArrowDown";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillBehanceCircle, AiFillLinkedin, AiFillCaretDown } from "react-icons/ai"
import {MdEmail} from "react-icons/md"

export default function Hero() {
    return (
        <section className="hero">

            <motion.div
                className="fluid-container"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: .2,
                    duration: 1,
                    stiffness: 260,
                    damping: 20
                }}
            >

                <div className="logo">
                    <img id="hero-logo" src={hero} alt="hero logo" />
                </div>

                <div className="text">
                    <p>SOFTWARE DEVELOPER / MOTION GRAPHICS</p>
                    <h1>JORDAN<br />CORTÉS</h1>

                    <div
                        className="call-to-action">
                        <Button
                            link="#projects"
                            text="Proyectos"
                            type="btn-color"
                            icon={<AiFillCaretDown />}
                        />
                    </div>

                </div>

                <div className="social-icons">
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{
                            scale: 0.8,
                            borderRadius: "100%"
                        }}
                    >
                        <a href="https://www.linkedin.com/in/jaycedam/">
                            <AiFillLinkedin />
                        </a>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{
                            scale: 0.8,
                            borderRadius: "100%"
                        }}
                    >
                        <a href="https://www.behance.net/jaycedam">
                            <AiFillBehanceCircle />
                        </a>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{
                            scale: 0.8,
                            borderRadius: "100%"
                        }}
                    >
                        <a href="https://github.com/Jaycedam">
                            <AiFillGithub />
                        </a>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{
                            scale: 0.8,
                            borderRadius: "100%"
                        }}
                    >
                        <a href="mailto:jaycedam@gmail.com">
                            <MdEmail />
                        </a>
                    </motion.div>

                </div>

                {/* <ArrowDown /> */}
            </motion.div>

        </section>
    )
}