import image from './images/laptop.svg';
import './hero.css';
import Button from "../Button/Button";
import { AiFillCaretDown } from "react-icons/ai";
import { motion } from 'framer-motion';
import { SiMinutemailer } from "react-icons/si";

// animation for framer motion
const hero = {
    hidden: {
        y: 20,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}

const heroTitle = {
    hidden: {
        scale: 1.2
    },
    visible: {
        scale: 1,
        transition: {
            duration: 1,
        }
    }
}

const heroText = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: .8,
        }
    }
}

export default function Hero() {
    return (
        <section className="hero">
            <motion.div
                variants={hero}
                initial="hidden"
                animate="visible"
                className="fluid-container">

                <div className="logo">
                    <img id="hero-logo" src={image} alt="hero logo" />
                </div>

                <div className="text">
                    <motion.p
                        variants={heroText}
                        initial="hidden"
                        animate="visible"
                    >
                        SOFTWARE DEVELOPER
                    </motion.p>

                    <motion.h1
                        variants={heroTitle}
                        initial="hidden"
                        animate="visible"
                    >
                        JORDAN<br />CORTÉS
                    </motion.h1>

                    <div className="call-to-action">
                        <Button
                            link="mailto:jaycedam@gmail.com"
                            text="Contactar"
                            type="btn-color"
                            icon={<SiMinutemailer />}
                        />

                        <Button
                            link="#projects"
                            text="Proyectos"
                            type="btn"
                            icon={<AiFillCaretDown />}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}