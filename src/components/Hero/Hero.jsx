import hero from './images/laptop.svg';
import './hero.css';
import Button from "../Button/Button";
import { AiFillCaretDown } from "react-icons/ai"
import { SiMinutemailer } from "react-icons/si";
import { motion } from 'framer-motion';

// animation for framer motion
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
        <motion.section
            variants={variant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hero">

            <div className="fluid-container">
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

            </div>
        </motion.section>
    )
}