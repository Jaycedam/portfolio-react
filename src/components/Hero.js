import React from "react";
import abstract from '../images/abstract.svg'
import { FaRegHandPointDown } from "react-icons/fa"

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-logo">
                <img src={abstract} alt="logo" />
            </div>

            <div className="hero-text">
                <p>jordancortes
                    <strong>.dev</strong>
                </p>

                <h1>Software<br />
                    Developer
                </h1>

            </div>

            <div className="call-to-action">
                <a href="mailto:jaycedam@gmail.com" className="btn-dark">
                    Contactar
                </a>
            </div>

            <FaRegHandPointDown className="down-icon"/>
        </div>
    )
}