import hero from './images/laptop.svg';
import './css/hero.css';
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { AiFillCaretDown } from "react-icons/ai"
import { SiMinutemailer } from "react-icons/si";

// animation for hero (framer motion)
const variant = {
    hidden: {
        y: 30,
        opacity: 0
    },
    visible: {
        y: 0,
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
                className="fluid-container"
                variants={variant}
                initial="hidden"
                animate="visible"
            >

                <div className="logo">
                    <img id="hero-logo" src={hero} alt="hero logo" />
                </div>

                <div className="text">
                    <p>SOFTWARE DEVELOPER</p>
                    <h1>JORDAN<br />CORTÉS</h1>

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