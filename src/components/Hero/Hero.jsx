import React from "react";
import hero from './assets/images/laptop.png';
import './assets/css/hero.css';
import ArrowDown from "../ArrowDown/ArrowDown";
import Button from "../Button/Button";
// import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="hero">

            <div className="container">
                <div className="logo">
                    <img id="hero-logo" src={hero} alt="hero logo" />
                </div>

                <div className="text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="536.73" height="276.84" viewBox="0 0 536.73 276.84">
                        <g id="Layer_1" data-name="Layer 1">
                            <text id="regular" transform="translate(0 123.13)" fontSize="100.01" fontFamily="Poppins-Black, Poppins" fontWeight="800">Software<tspan x="0" y="91">Developer</tspan></text>
                            <text id="color" transform="translate(3 30.69)" fontSize="36" fontFamily="Poppins-Bold, Poppins" fontWeight="700">import slogan</text>
                        </g>
                    </svg>

                    <div
                        className="call-to-action">
                        <Button
                            link="https://github.com/Jaycedam"
                            text="GitHub"
                            type="btn-light"
                        />

                        <Button
                            link="mailto:jaycedam@gmail.com"
                            text="Contactar"
                            type="btn-color"
                        />
                    </div>
                </div>

                <ArrowDown />
            </div>

        </section>
    )
}