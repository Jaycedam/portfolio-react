import "./hero.css";
import Button from "../Button/Button";
import { SiMinutemailer } from "react-icons/si";
import { motion } from "framer-motion";
import LaptopAnimation from "../LaptopAnimation/LaptopAnimation";

const title = {
    hidden: {
        scale: 1.2
    },
    visible: {
        scale: 1,
        transition: {
            duration: .8,
            ease: "easeOut"
        }
    }
}

const text = {
    hidden: {
        opacity: 0,
        y: -10
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .8,
            ease: "easeOut"
        }
    }
}

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="fluid-container">
                <div className="image">
                    <LaptopAnimation />
                </div>

                <div className="text">
                    <div className="title">
                        <motion.p
                            variants={text}
                            initial="hidden"
                            animate="visible"
                        >
                            SOFTWARE DEVELOPER
                        </motion.p>

                        <motion.h1
                            variants={title}
                            initial="hidden"
                            animate="visible"
                        >
                            JORDAN
                            <br />
                            CORTÉS
                        </motion.h1>
                    </div>


                    <div className="call-to-action">
                        <Button
                            link="mailto:jaycedam@gmail.com"
                            text="Contactar"
                            type="btn-color"
                            icon={<SiMinutemailer />}
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}