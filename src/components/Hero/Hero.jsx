import React from "react";
import hero from './assets/images/laptop.svg';
import './assets/css/hero.css';
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { AiFillCaretDown } from "react-icons/ai"

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
                    <p>SOFTWARE DEVELOPER</p>
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

            </motion.div>

        </section>
    )
}